/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {Aluno} from '../src/Models/Aluno';

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	var primeiroAluno : Aluno = new Aluno("berna Genuino", 20, 7, 72.00, 1.72, true);
	var segundoAluno : Aluno = new Aluno("pablo Silva", 29, 2, 81.00, 1.91, false);
	var terceiroAluno : Aluno = new Aluno("rael Silva", 45, 9, 90.00, 1.69, true);
	var alunos = new Array(primeiroAluno,segundoAluno,terceiroAluno);

	//R01
	var idadeSomada = primeiroAluno.idade + segundoAluno.idade + terceiroAluno.idade;

	console.log('a idade de todos os ubuntus somada é: ' + idadeSomada + '\r\n')
	
	//R02
	console.log('Agrupando o nome dos alunos\r\n')
	var nomes = new Array(primeiroAluno.nome, segundoAluno.nome, terceiroAluno.nome);
	nomes.forEach((value) => 
	{
		console.log(value);
	})

	//R03
	console.log('Somando Imc dos alunos: \r\n')
	alunos.forEach((value) => 
	{
		var imc = value.peso / (value.altura * value.altura);
		console.log(imc.toFixed(2))		
	})

	//R04
	console.log('Quantidade de ubuntus devs: \r\n')

	var alunosEhDevs = alunos.filter((value) => value.ehDev)
	alunosEhDevs.forEach((value) => {
		console.log(value.nome);
	})

	//R05
	console.log('Quantidade de ubuntus com Silva: \r\n')

	var AlunosSilva = alunos.filter((value) => value.nome.includes("Silva"))
	AlunosSilva.forEach((value) => {
		console.log(value.nome)
	})
});
