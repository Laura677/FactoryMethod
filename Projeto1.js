// classe base acesso
class Acesso{
    constructor(nome){
        this.nome = nome;
    }
    mostrarDetalhes(){
        console.log(`Nome: ${this.nome}`);
    }
}
// ================SUBCLASSES=============
// Aluno
class Aluno extends Acesso{
    constructor(nome){
        super(nome);
    }
}
// Professor
class Professor extends Acesso{
    constructor(nome){
        super(nome);
    }
}
// Terceiros

class Terceiros extends Acesso{
    constructor(nome){
        super(nome);
    }
}
// Visitante
class Visitante extends Acesso{
    constructor(nome){
        super(nome);
    }
}
// Administrativo
class Admin extends Acesso{
    constructor(nome){
        super(nome);
    }
}

//Fabrica Abstrata
class FabricaAcesso{
    criarAcesso(nome){
        throw new Error(`O metodo deve ser implementado`);
    }
}

//fabrica aluno
class FabricaAluno extends FabricaAcesso{
    criarAcesso(nome){
        return new Aluno(nome);
    }
}

//fabrica professor
class FabricaProfessor extends FabricaAcesso{
    criarAcesso(nome){
        return new Professor(nome);
    }
}

//fabrica terceiros
class FabricaTerceiros extends FabricaAcesso{
    criarAcesso(nome){
        return new Terceiros(nome);
    }
}

//fabrica visitante
class FabricaVisitante extends FabricaAcesso{
    criarAcesso(nome){
        return new Visitante(nome);
    }
}

//fabrica administrativo
class FabricaAdmin extends FabricaAcesso{
    criarAcesso(nome){
        return new Admin(nome);
    }
}
//========== USO DO PADRÃO ============

const fabricaAluno = new FabricaAluno();
const fabricaProfessor = new FabricaProfessor();
const fabricaTerceiros = new FabricaTerceiros();
const fabricaVisitante = new FabricaVisitante();
const fabricaAdmin = new FabricaAdmin();

const acesso1 = fabricaAluno.criarAcesso(`Laura`);
const acesso2 = fabricaProfessor.criarAcesso(`Vinicius`);
const acesso3 = fabricaTerceiros.criarAcesso(`José`);
const acesso4 = fabricaVisitante.criarAcesso(`João`);
const acesso5 = fabricaAdmin.criarAcesso(`Renan`);

acesso1.mostrarDetalhes();
acesso2.mostrarDetalhes();
acesso3.mostrarDetalhes();
acesso4.mostrarDetalhes();
acesso5.mostrarDetalhes();

