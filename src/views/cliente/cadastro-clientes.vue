<!-- src/views/CadastroClientes.vue -->
<template>
  <div class="cadastro-clientes">
    <h2>Cadastro de Clientes</h2>
    <form @submit.prevent="submitForm">
      <div class="grid-container">
        <div class="form-group">
          <label for="cnpj">CNPJ:</label>
          <input type="text" id="cnpj" v-model="cliente.cnpj" required />
        </div>
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="cliente.nome" required />
        </div>
        <div class="form-group">
          <label for="fornecedor_id">Fornecedor ID:</label>
          <input
            type="text"
            id="fornecedor_id"
            v-model="cliente.fornecedor_id"
          />
        </div>
      </div>

      <!-- //////////////////////////////////////////////////////////////////////////// -->
      <div><h2>Endereço de Cobrança</h2></div>
      <div class="grid-container">
        <div class="form-group">
          <label for="bairro_cob">Bairro:</label>
          <input
            type="text"
            id="bairro_cob"
            v-model="cliente.bairro_cob"
            required
          />
        </div>
        <div class="form-group">
          <label for="cep_cob">CEP:</label>
          <input type="text" id="cep_cob" v-model="cliente.cep_cob" required />
        </div>
        <div class="form-group">
          <label for="cidade_cob">Cidade:</label>
          <input
            type="text"
            id="cidade_cob"
            v-model="cliente.cidade_cob"
            required
          />
        </div>

        <div class="form-group">
          <label for="rua_cob">Rua:</label>
          <input type="text" id="rua_cob" v-model="cliente.rua_cob" required />
        </div>
        <div class="form-group">
          <label for="estado_cob">Estado:</label>
          <input
            type="text"
            id="estado_cob"
            v-model="cliente.estado_cob"
            required
          />
        </div>
        <div class="form-group">
          <label for="pais_cob">País:</label>
          <input
            type="text"
            id="pais_cob"
            v-model="cliente.pais_cob"
            required
          />
        </div>
        <div class="form-group"></div>
        <div class="form-group">
          <label for="complemento_cob">Complemento:</label>
          <input
            type="text"
            id="complemento_ent"
            v-model="cliente.complemento_ent"
          />
        </div>
      </div>

      <!-- //////////////////////////////////////////////////////////////////////////// -->
      <div><h2>Endereço de Cobrança</h2></div>
      <div class="grid-container">
        <div class="form-group">
          <label for="bairro_ent">Bairro:</label>
          <input
            type="text"
            id="bairro_ent"
            v-model="cliente.bairro_ent"
            required
          />
        </div>
        <div class="form-group">
          <label for="cep_ent">CEP:</label>
          <input type="text" id="cep_ent" v-model="cliente.cep_ent" required />
        </div>
        <div class="form-group">
          <label for="cidade_ent">Cidade:</label>
          <input
            type="text"
            id="cidade_ent"
            v-model="cliente.cidade_ent"
            required
          />
        </div>
        <div class="form-group">
          <label for="rua_ent">Rua:</label>
          <input
            type="text"
            id="complemento_ent"
            v-model="cliente.complemento_ent"
          />
        </div>

        <div class="form-group">
          <label for="estado_ent">Estado:</label>
          <input
            type="text"
            id="estado_ent"
            v-model="cliente.estado_ent"
            required
          />
        </div>
        <div class="form-group">
          <label for="pais_ent">País:</label>
          <input
            type="text"
            id="pais_ent"
            v-model="cliente.pais_ent"
            required
          />
        </div>
        <div class="form-group"></div>
        <div class="form-group">
          <label for="complemento_ent">Complemento:</label>
          <input
            type="text"
            id="complemento_ent"
            v-model="cliente.complemento_ent"
          />
        </div>
      </div>

      <button type="submit">Cadastrar Cliente</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Cliente {
  cnpj: string;
  nome: string;
  fornecedor_id: string;
  bairro_cob: string;
  cep_cob: string;
  cidade_cob: string;
  complemento_cob: string;
  estado_cob: string;
  pais_cob: string;
  rua_cob: string;
  bairro_ent: string;
  cep_ent: string;
  cidade_ent: string;
  complemento_ent: string;
  estado_ent: string;
  pais_ent: string;
  rua_ent: string;
}

export default defineComponent({
  name: "CadastroClientes",
  setup() {
    const cliente = ref<Cliente>({
      cnpj: "",
      nome: "",
      fornecedor_id: "",
      bairro_cob: "",
      cep_cob: "",
      cidade_cob: "",
      complemento_cob: "",
      estado_cob: "",
      pais_cob: "",
      rua_cob: "",
      bairro_ent: "",
      cep_ent: "",
      cidade_ent: "",
      complemento_ent: "",
      estado_ent: "",
      pais_ent: "",
      rua_ent: "",
    });

    const submitForm = () => {
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
      console.log("Dados do cliente:", cliente.value);
      // Faça a requisição POST para o seu backend aqui
    };

    return {
      cliente,
      submitForm,
    };
  },
});
</script>

<style scoped>
.cadastro-clientes {
  padding: 20px;
  text-align: center; /* Centraliza o texto da página */
}

h2 {
  color: #333;
}

h3 {
  margin-top: 20px; /* Espaço acima dos cabeçalhos */
}

.section-title {
  margin-top: 30px; /* Mais espaço antes dos títulos das seções */
  margin-bottom: 10px; /* Espaço abaixo dos títulos das seções */
  font-weight: bold; /* Destaca o título */
  border-bottom: 2px solid #ccc; /* Linha embaixo do título */
}

.grid-container {
  display: grid; /* Ativa o layout em grid */
  grid-template-columns: repeat(3, 1fr); /* Define 3 colunas */
  gap: 15px; /* Espaço entre as colunas e linhas */
  justify-items: center; /* Centraliza os itens nas colunas */
}

.form-group {
  display: flex;
  flex-direction: column; /* Coloca o label e o input um embaixo do outro */
  width: 100%; /* Garante que os grupos de formulário ocupem toda a largura */
  max-width: 250px; /* Define um limite de largura para os campos */
}

label {
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* Faz os inputs ocuparem toda a largura do grupo */
}
</style>
