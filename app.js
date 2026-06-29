const minefield = document.getElementById("minefield");

const databaseItems = [
    { name: "Banco de Dados", answer: "Local onde as informações são armazenadas." },
    { name: "Tabela", answer: "Organiza os dados em linhas e colunas." },
    { name: "Registro", answer: "Uma linha da tabela contendo os dados." },
    { name: "Campo", answer: "Uma coluna da tabela." },
    { name: "SQL", answer: "Linguagem usada para trabalhar com bancos de dados." },

    { name: "SELECT", answer: "Consulta dados da tabela." },
    { name: "INSERT", answer: "Adiciona novos registros." },
    { name: "UPDATE", answer: "Altera registros existentes." },
    { name: "DELETE", answer: "Remove registros." },
    { name: "CREATE", answer: "Cria uma tabela ou banco de dados." },

    { name: "DROP", answer: "Exclui uma tabela ou banco de dados." },
    { name: "ALTER", answer: "Modifica a estrutura de uma tabela." },
    { name: "WHERE", answer: "Filtra os registros da consulta." },
    { name: "ORDER BY", answer: "Ordena os resultados." },
    { name: "GROUP BY", answer: "Agrupa registros com valores iguais." },

    { name: "PRIMARY KEY", answer: "Identifica cada registro de forma única." },
    { name: "JOIN", answer: "Combina dados de duas ou mais tabelas." },
    { name: "INDEX", answer: "Acelera as pesquisas na tabela." },
    { name: "VIEW", answer: "Tabela virtual criada por uma consulta." },
    { name: "Backup", answer: "Cópia de segurança dos dados." }
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(databaseItems);

databaseItems.forEach((item, index) => {

    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.textContent = index + 1;

    cell.addEventListener("click", () => {

        if (cell.classList.contains("revealed")) return;

        if (cell.classList.contains("open")) {

            cell.classList.add("revealed");
            cell.textContent = item.answer;

        } else {

            cell.classList.add("open", "type-db");
            cell.textContent = item.name;

        }

    });

    minefield.appendChild(cell);

});