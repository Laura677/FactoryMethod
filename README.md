# 🔑 Sistema de Controle de Acesso (Factory Method)

Projeto simples em **JavaScript** para gerenciamento e instanciação de diferentes tipos de acessos a um sistema, aplicando o padrão de projeto criacional **Factory Method / Abstract Factory**.

---

## 📌 Sobre o Projeto

O objetivo do código é desacoplar a criação de objetos de acesso das suas subclasses específicas. A partir de uma classe base `Acesso` e de uma fábrica genérica `FabricaAcesso`, são criadas instâncias personalizadas para cada perfil do sistema.

### 👥 Perfis de Acesso

- `Aluno`
- `Professor`
- `Terceiros`
- `Visitante`
- `Admin`

---

## 🏗️ Padrão de Projeto Aplicado

O código utiliza **Fábricas de Objetos (Factory Method)** para garantir que a criação de cada perfil siga uma estrutura padronizada e extensível:

- **Classe Base:** `Acesso` (contém a propriedade `nome` e o método `mostrarDetalhes()`).
- **Fábrica Abstrata:** `FabricaAcesso` (define a interface com o método `criarAcesso()`).
- **Fábricas Concretas:** `FabricaAluno`, `FabricaProfessor`, `FabricaTerceiros`, `FabricaVisitante` e `FabricaAdmin`.

Projeto 01 - Tecnicas de Programação II
Linguagem: JavaScript (ES6+)

Conceitos: Programação Orientada a Objetos (POO), Herança e Design Patterns.
