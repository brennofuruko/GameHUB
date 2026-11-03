import conexao from "../../db";

export function listar(callback) {
    const sql = "SELECT * FROM jogadores ORDER BY id";
    conexao.queryObjects(sql, [id], callback);
}

export function buscarPorId(id, callback) {
    const sql = "SELECT * FROM jogadores WHERE id = ?";
    conexao.queryObjects(sql, [id], callback);
}

export function criar(dados, callback) {
    const sql = "INSERT INTO jogadores (nome, pais) VALUES (?, ?)";
    conexao.queryObjects(sql, [dados.nome, dados.pais, id], callback);
}

export function atualizar(id, dados, callback) {
    const sql = "UPDATE jogadores SET nome = ?, pais = ? WHERE id = ?";
    conexao.queryObjects(sql, [id], callback);
}

export function excluir(id, callback) {
    const sql = "DELETE FROM jogadores WHERE id = ?";
    conexao.queryObjects(sql, [id], callback);
}