class Funcionario {
    nome;
    cpf;
    salario;
    aumento = 0.1;

    constructor(nome, cpf, salario) {
        this.nome = nome;
        this.cpf = cpf
        this.salario = salario;

    }


    receberAumento() {
        this.salario += this.salario * this.aumento
        console.log(`Novo salario: R$ ${this.salario}`)
    }

    exibirDados() {
        console.log(`Nome: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Salario R$ ${this.salario}`)

    }
}

const func1 = new Funcionario("Raxanie", "23232323", 15000)
func1.exibirDados();
func1.receberAumento();


class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia) {
        super(nome, cpf, salario)
        this.nivelGerencia = nivelGerencia
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Nivel: ${this.nivelGerencia}`)

    }

}

const gerente1 = new Gerente('Marcia', "1232323", 1000, "Pleno")
gerente1.exibirDados();
gerente1.receberAumento();


class Assistente extends Funcionario {
   matricula;

    constructor(nome, cpf, salario, matricula) {
        super(nome, cpf, salario);
        this.matricula = matricula;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Matricula: ${this.matricula}`)

    }
}

const  assist1= new Assistente('Laura', "232323", 232323, "A3434")
assist1.exibirDados();
assist1.exibirDados();



class AssistenteTecnico extends Assistente {
    bonusSalarial;
 
     constructor(nome, cpf, salario, matricula, bonusSalarial) {
         super(nome, cpf, salario, matricula);
         this.bonusSalarial = bonusSalarial;
     }
 
     exibirDados(){
         super.exibirDados();
         console.log(`Bonus Salarial: ${this.bonusSalarial}`)
 
     }
 }
 
 const  assistTecnico1= new AssistenteTecnico('Heloiza', 23232, 1100, 111, 'dia', 200)
 assistTecnico1.exibirDados();
 assistTecnico1.receberAumento();
 console.log('*********************')



 
class AssistenteAdministrativo extends Assistente {
    turno;
    bonusSalarial;
 
     constructor(nome, cpf, salario, matricula, turno, adicionalNoturno) {
         super(nome, cpf, salario, matricula);
         this.turno = turno;
         this.adicionalNoturno = adicionalNoturno;
     }
 
     exibirDados(){
         super.exibirDados();
         console.log(`Turno: ${this.turno}`)
         if (this.turno =="dia" || this.turno === "noite") { 
            console.log(`Adicional noturno: ${this.turno}`);
           
        }
         console.log(`Adicional noturno : ${this.adicionalNoturno}`)
 
     }
 }
 
 const  assistAdm1= new AssistenteAdministrativo('Heloiza', 23232, 1100, 111, 'dia', 200)
 assistAdm1.exibirDados();



 //!!!!VER VIDEO TA COM ERRO