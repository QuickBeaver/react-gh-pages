import React from 'react';

function Oracle() {
  return <div className="page-wrapper">
    <h2>Oracle</h2>
    <p>Mes astuces Oracle</p>
    <h3>Changer de PDB (Pluggable DataBase)</h3>
    <ul>
      <li>sqlplus / as sysdba</li>
      <li>show pdbs</li>
      <li>alter session set container = $pdb_name</li>
    </ul>
  </div>
}

export default Oracle;