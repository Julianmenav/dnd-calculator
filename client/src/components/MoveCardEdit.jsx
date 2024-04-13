import {useState, useEffect } from 'react'
import React from 'react'
import useAttacks from '../hooks/useAttacks';
import useStats from '../hooks/useStats';
import DiceSelector from './DiceSelector';
import AttackList from './AttackList';
import MoveStats from './MoveStats';
import EditDeleteButtons from './EditDeleteButtons';

const attackDice = 20;
const maximumDices = 10;

export default function MoveCardEdit({initialStats, copyCard, deleteCard, idx}) {
  const stats = useStats(initialStats); // CA, Bonificador, Bonificador Ataque
  const { attacks, addAttack, toggleProperty, deleteAttack } = useAttacks();
  const [selectedDices, setSelectedDices] = useState([]);

  const [addingAttack, setAddingAttack] = useState(false);
  const [deletedCard, setDeletedCard] = useState(false);
  
  const [averageDamage, setAverageDamage] = useState(0);    
  
  // CALCULADORA
  useEffect(() => {
  
    if(attacks.lenth < 1) return;
    let averageTotalDamage = 0;
    
    attacks.forEach((attack) => {
      let averageDicesDamage = attack["attacks"].reduce((agg, dice) => {
        let averageDice = ((dice * (dice + 1)) / 2) / dice;
        return agg + averageDice;
      }, 0);
      
      // Calcular bonus a tirada de ataque
      let chanceBonus = 0;
      if(attack.heavyFeat) chanceBonus -= 5;
      if(attack.precisionManeuver) chanceBonus += 4.5;
      
      // Calcular bonus al daño
      let damageBonus = 0;
      if(attack.heavyFeat) damageBonus += 10;
      if(!attack.noBonus) damageBonus += parseFloat(stats.bonusDamage); 

      // Daño del ataque. (media dados + bonus daño)
      let damage = parseFloat(averageDicesDamage) + damageBonus;

      // Probabilidad de dar.
      let chance = (Math.min(attackDice - ((stats.armorClass - 1) - ( parseFloat(stats.bonusAttack) + chanceBonus )), 20)) / 20;

      averageTotalDamage += damage * chance;
    });
    
    setAverageDamage(averageTotalDamage.toFixed(2));

  }, [stats, attacks])

  // FUNCIONES BASICAS
  const handleCloseDices = () => {
    setAddingAttack(false);
    setSelectedDices([]);
  }

  const handleDiceClick = (diceNumber) => {
    if(selectedDices.length >= maximumDices) return
    setSelectedDices((prev) => [...prev, diceNumber])
  }
  
  // CREAR ATAQUE
  const handleAddAttack = () => {
    if(selectedDices.length < 1) return;
    addAttack({
      heavyFeat: false,
      precisionManeuver: false,
      noBonus: false,
      attacks: selectedDices,
    });
    setAddingAttack(false);
    setSelectedDices([]);
  };

  return (
    <div className={`w-full relative max-w-[800px] bg-white p-4 rounded-md shadow-md text-gray-600 ${deletedCard ? "hidden" : ""}`}>
      <EditDeleteButtons copyCard={copyCard} setDeletedCard={setDeletedCard} stats={stats} idx={idx} />
      <MoveStats {...stats} />
      <DiceSelector addingAttack={addingAttack} setAddingAttack={setAddingAttack} handleCloseDices={handleCloseDices} handleDiceClick={handleDiceClick} selectedDices={selectedDices} handleAddAttack={handleAddAttack} />
      {/*  DMG  */}
      <div className="w-full flex justify-between">
          <div className="text-center">
            <p>Daño medio</p>
            <p className="text-xl">{averageDamage}</p>
          </div>
      </div>
      {/* Historico de ataques */}
      <AttackList attacks={attacks} toggleProperty={toggleProperty} deleteAttack={deleteAttack} />
    </div>
  )
}
