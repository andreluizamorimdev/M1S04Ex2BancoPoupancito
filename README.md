﻿# M1S04Ex 2, 3 e 4 BancoPoupancito

Instruções:

executar o live server e abrir o console do navegador para visualizar os resultados (quando o prompt pedir senha é o valor colocado na instancia do objeto 1234 no caso do exemplo).



[M1S04] Ex2 - Banco Poupancito

Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.

Crie uma classe chamada Conta

A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações.

[M1S04] Ex3 - Banco Poupancito 2

Agora o banco quer criar uma nova classe chamada ContaPoupança. A conta poupança tem todos os métodos e atributos da classe Conta (herança). Porém, essa nova classe deve ter um novo método chamado atualizaJuros. Esse método deve pegar o valor do saldo e adicionar um ganho baseado em um índice de índice de 0.7% todas as vezes que for chamado.

[M1S04] Ex4 - Banco Poupancito 3

Agora o banco inventou de criar um novo tipo de poupança, chamada poupancaPremium, que contém uma taxa de juros melhor. Crie uma classe que herde atributos e métodos da classe poupanca criada anteriormente e modifique o método atualizaJuros (polimorfismo), aumentando o a taxa para 1.2% toda a vez que o método for chamado.
