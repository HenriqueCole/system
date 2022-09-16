import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import "../../styles.scss";
import { Link } from "react-router-dom";
import Services from "../../services/service.ts";

import deleteIcon from "../../assets/excluir.png";

export default function Client() {
  const [list, setList] = useState([]);

  let url = window.location.search.substring(1);
  const [currentPage, setCurrentPage] = useState("");
  let [linkPage, setLinkPage] = useState("");
  const [viewList, setViewList] = useState(undefined);
  const [headerlist, setHeaderList] = useState(undefined);
  const [loading, setLoading] = useState();
  const [placeholderName, setPlaceholderName] = useState("");

  function buscarCliente() {
    Services.buscarCliente().then((result) => {
      setList(result);
    });
  }

  function excluirCliente(id) {
    Services.excluirCliente(id).then((result) => {
      buscarCliente();

      window.location.reload();
    });
  }

  useEffect(() => {
    setLoading(
      <div className="loading">
        <img src="/loading.svg" alt="" />
      </div>
    );

    if (url === "client") {
      setCurrentPage("Cadastrar Cliente");
      setLinkPage("/clientRegister");
      setPlaceholderName("um cliente");

      Services.buscarClientes().then((result) => {
        setHeaderList(
          <tr key="name">
            <th>Nome</th>
            <th>CNPJ</th>
          </tr>
        );
        setViewList(
          result.map(function (item) {
            return (
              <>
                <tr id="" key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.cnpj}</td>
                  <div
                    onClick={() => excluirCliente(item.id)}
                    className="containerDelete"
                  >
                    <img className="deleteIcon" src={deleteIcon} alt="" />
                  </div>
                </tr>
              </>
            );
          })
        );
        setLoading(undefined);
      });
    } else if (url === "machine") {
      setCurrentPage("Cadastrar Maquina");
      setLinkPage("/machineRegister");
      setPlaceholderName("uma maquina");

      Services.buscarMaquinas().then((result) => {
        setHeaderList(
          <tr key="name">
            <th>Nome</th>
            <th>Marca</th>
            <th>Ano Fab.</th>
            <th>Ano Compra</th>
            <th>Valor Compra</th>
            <th>RPM</th>
            <th>Agulhas</th>
            <th>Platinas</th>
            <th>Blocos</th>
            <th>Gaiolas</th>
            <th>Cones</th>
          </tr>
        );
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.nome}</td>
                <td>{item.marca}</td>
                <td>{item.ano_fabricacao}</td>
                <td>{item.ano_compra}</td>
                <td>{item.valor_compra}</td>
                <td>{item.rpm}</td>
                <td>{item.qtd_agulhas}</td>
                <td>{item.qtd_platinas}</td>
                <td>{item.qtd_blocos}</td>
                <td>{item.qtd_gaiolas}</td>
                <td>{item.qtd_cones_por_gaiola}</td>
              </tr>
            );
          })
        );
        setLoading(undefined);
      });
    } else if (url === "product") {
      setCurrentPage("Cadastrar Produtos");
      setLinkPage("/productRegister");
      setPlaceholderName("um produto");

      Services.buscarProdutos().then((result) => {
        setHeaderList(
          <tr key="name">
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Total</th>
            <th>Anexo</th>
            <th>Fornecedor</th>
          </tr>
        );
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.descricao}</td>
                <td>{item.quantidade}</td>
                <td>{item.valor_total_produto}</td>
                <td>{item.arquivo_nf}</td>
                <td>{item.idFornecedor}</td>
              </tr>
            );
          })
        );
        setLoading(undefined);
      });
    } else if (url === "provider") {
      setCurrentPage("Cadastrar Fornecedor");
      setLinkPage("/providerRegister");
      setPlaceholderName("um Fornecedor");

      Services.buscarFornecedores().then((result) => {
        setHeaderList(
          <tr key="name">
            <th>Nome</th>
            <th>CNPJ</th>
          </tr>
        );
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.nome}</td>
                <td>{item.cnpj}</td>
              </tr>
            );
          })
        );
        setLoading(undefined);
      });
    } else if (url === "mesh") {
      setCurrentPage("Cadastrar Malha");
      setLinkPage("/meshRegister");
      setPlaceholderName("uma malha");

      Services.buscarMalha().then((result) => {
        console.log(result);
        setHeaderList(
          <tr key="name">
            <th>Descrição</th>
            <th>Fio Malha</th>
            <th>Cliente</th>
          </tr>
        );
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.descricao}</td>
                <td>{item.fioMalha}</td>
                <td>{item.cliente}</td>
              </tr>
            );
          })
        );
        setLoading(undefined);
      });
    } else if (url === "wire") {
      setCurrentPage("Cadastrar Fio");
      setLinkPage("/wireRegister");
      setPlaceholderName("um Fio");

      Services.buscarFios().then((result) => {
        setHeaderList(
          <tr key="name">
            <th>Descrição</th>
          </tr>
        );
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.descricao}</td>
              </tr>
            );
          })
        );
        setLoading(undefined);
      });
    } else if (url === "employee") {
      setCurrentPage("Cadastrar Funcionário");
      setLinkPage("/employeeRegister");
      setPlaceholderName("um funcionário");

      Services.buscarFuncionarios().then((result) => {
        setHeaderList(
          <tr key="name">
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Idade</th>
            <th>Salário</th>
            <th>Turno</th>
          </tr>
        );
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.idade}</td>
                <td>{item.salario}</td>
                <td>{item.turno}</td>
              </tr>
            );
          })
        );
        setLoading(undefined);
      });
    } else if (url === "enterWire") {
      setCurrentPage("Cadastrar Entrada de Fio");
      setLinkPage("/enterWire");
      setPlaceholderName("uma entrada de fio");

      Services.buscarEntradaFio().then((result) => {
        setHeaderList(
          <tr key="name">
            <th>Caixas</th>
            <th>Kg</th>
            <th>Rolos</th>
            <th>Sub-total</th>
            <th>Fornecedor</th>
            <th>Fio</th>
            <th>Anexo</th>
          </tr>
        );
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.qtd_caixa}</td>
                <td>{item.td_kg}</td>
                <td>{item.qtd_rolos_por_caixa}</td>
                <td>{item.subtotal}</td>
                <td>{item.idFornecedor}</td>
                <td>{item.idFio}</td>
                <td>{item.arquivo_nf}</td>
              </tr>
            );
          })
        );
        setLoading(undefined);
      });
    } else if (url === "leaveMesh") {
      setCurrentPage("Cadastrar Saída de Fio");
      setLinkPage("/leaveMesh");
      setPlaceholderName("uma saída de fio");

      Services.buscarSaidaMalha().then((result) => {
        console.log(result);
        setHeaderList(
          <tr key="name">
            <th>Saída</th>
            <th>Anexo</th>
            <th>Valor Total</th>
            <th>Cliente</th>
          </tr>
        );
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.saida}</td>
                <td>{item.anexo}</td>
                <td>{item.valorTotal}</td>
                <td>{item.cliente}</td>
              </tr>
            );
          })
        );
        setLoading(undefined);
      });
    } else if (url === "productionScreen") {
      setCurrentPage("Iniciar Produção");
      setLinkPage("/productionScreen");
      setPlaceholderName("uma produção");

      Services.buscarProducoes().then((result) => {
        console.log(result);
        setHeaderList(
          <tr key="name">
            <th>Peso</th>
            <th>Defeitos</th>
            <th>Cliente</th>
            <th>Maquina</th>
            <th>Funcionário</th>
          </tr>
        );
        setViewList(
          list.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.peso}</td>
                <td>{item.defeitos}</td>
                <td>{item.cliente}</td>
                <td>{item.maquina}</td>
                <td>{item.funcionario}</td>
              </tr>
            );
          })
        );
        setLoading(undefined);
      });
    }
  }, []);

  return (
    <div className="container">
      <Header></Header>
      <Sidebar></Sidebar>

      <div className="container">
        <main>
          <div className="page">
            <input type="text" placeholder={`Procure ${placeholderName}`} />
          

            <Link to={linkPage}>
              <button>{currentPage}</button>
            </Link>
          </div>

          <div className="tabela">
            <table>
              {loading}
              {headerlist}
              {viewList}
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
