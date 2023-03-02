// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;


contract  MeuContrato{

    uint256 public numero;

    function getNumero() public view returns(uint256){
        return numero;
    }

}