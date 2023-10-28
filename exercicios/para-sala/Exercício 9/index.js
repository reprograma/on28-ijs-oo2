class Funcionario {
    nome;
    cpf;
    salario;
    aumento = 0.1;

    constructor(nome, cpf, salario){
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }

    receberAumento(){
        this.salario += this.salario * this.aumento
        console.log(`Novo salario: R$${this.salario}`)
    }
    exibirDados(){
        console.log(`Nome: ${this.nome}`)
        console.log(`CPF: ${this.cpf}`)
        console.log(`Salário: ${this.salario}`)
    }
}

// const func1 = new Funcionario("Roxanie", "12345678932189", 15000)
// func1.exibirDados();
// func1.receberAumento();

class Gerente extends Funcionario{
    nivelGerencia;
    aumento = 0.15;

    constructor(nome,cpf, salario, nivelGerencia){
        super(nome, cpf, salario);
        this.nivelGerencia = nivelGerencia;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Nivel: ${this.nivelGerencia}`)
    }
}

// const gerente1 = new Gerente ("Marcia", "152416574651", 10000, "Pleno")
// gerente1.exibirDados();
// gerente1.receberAumento();

class Assistente extends Funcionario{
    matricula;

    constructor(nome,cpf, salario, matricula){
        super(nome, cpf, salario);
        this.matricula = matricula;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Matricula: ${this.matricula}`)
    }
}

// const assist1 = new Assitente("Laura", "123549874512", 1000, "A45214756");
// assist1.exibirDados();
// assist1.receberAumento();

class AssistenteTecnico extends Assistente{
    bonusSalarial;

    constructor(nome,cpf, salario, matricula, bonusSalarial){
        super(nome, cpf, salario, matricula);
        this.bonusSalarial = bonusSalarial;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Bonus Salarial: ${this.bonusSalarial}`)
    }
}

// const assistTec1 = new AssistenteTecnico("Noemi", "123549874512", 1100, "A1528743", 200);
// assistTec1.exibirDados();
// assistTec1.receberAumento();

class AssistenteAdministrativo extends Assistente{
    turno;
    adicionalNoturno;

    constructor(nome,cpf, salario, matricula, turno, adicionalNoturno){
        super(nome, cpf, salario, matricula);
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
    }

    exibirDados(){
        super.exibirDados();
        console.log(`Turno: ${this.turno}`)
        if(this.turno == 'noite' || this.turno == 'Noite'){
            console.log(`Adicional Noturno: ${this.adicionalNoturno}`)
        }
        
    }
}

const assistenteAdm = new AssistenteAdministrativo('Lara', 123456768, 10000, 111, 'dia', 500)
assistenteAdm.exibirDados()
console.log("****************")
const assistenteAdm2 = new AssistenteAdministrativo('Fernanda', "123456768", 10000, 111, 'noite', 500)
assistenteAdm2.exibirDados()