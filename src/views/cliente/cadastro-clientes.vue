<!-- src/views/CadastroClientes.vue -->
<template>
  <div class="cadastro-clientes">
    <form @submit.prevent="createCliente">
      <div class="grid-container">
        <div class="form-group">
          <label for="cnpj">CNPJ:</label>
          <input type="text" id="cnpj" v-model="clienteForm.cnpj" required />
        </div>
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="clienteForm.nome" required />
        </div>
        <div class="form-group">
          <label for="fornecedor_id">Fornecedor ID:</label>
          <input
            type="text"
            id="fornecedor_id"
            v-model="clienteForm.fornecedor_id"
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
            v-model="clienteForm.bairro_cob"
            required
          />
        </div>
        <div class="form-group">
          <label for="cep_cob">CEP:</label>
          <input
            type="text"
            id="cep_cob"
            v-model="clienteForm.cep_cob"
            required
          />
        </div>
        <div class="form-group">
          <label for="cidade_cob">Cidade:</label>
          <input
            type="text"
            id="cidade_cob"
            v-model="clienteForm.cidade_cob"
            required
          />
        </div>

        <div class="form-group">
          <label for="rua_cob">Rua:</label>
          <input
            type="text"
            id="rua_cob"
            v-model="clienteForm.rua_cob"
            required
          />
        </div>
        <div class="form-group">
          <label for="estado_cob">Estado:</label>
          <input
            type="text"
            id="estado_cob"
            v-model="clienteForm.estado_cob"
            required
          />
        </div>
        <div class="form-group">
          <label for="pais_cob">País:</label>
          <input
            type="text"
            id="pais_cob"
            v-model="clienteForm.pais_cob"
            required
          />
        </div>
        <div class="form-group"></div>
        <div class="form-group full-width">
          <label for="complemento_cob">Complemento:</label>
          <input
            type="text"
            id="complemento_ent"
            v-model="clienteForm.complemento_cob"
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
            v-model="clienteForm.bairro_ent"
            required
          />
        </div>
        <div class="form-group">
          <label for="cep_ent">CEP:</label>
          <input
            type="text"
            id="cep_ent"
            v-model="clienteForm.cep_ent"
            required
          />
        </div>
        <div class="form-group">
          <label for="cidade_ent">Cidade:</label>
          <input
            type="text"
            id="cidade_ent"
            v-model="clienteForm.cidade_ent"
            required
          />
        </div>
        <div class="form-group">
          <label for="rua_ent">Rua:</label>
          <input
            type="text"
            id="complemento_ent"
            v-model="clienteForm.rua_ent"
          />
        </div>
        <div class="form-group">
          <label for="estado_ent">Estado:</label>
          <input
            type="text"
            id="estado_ent"
            v-model="clienteForm.estado_ent"
            required
          />
        </div>
        <div class="form-group">
          <label for="pais_ent">País:</label>
          <input
            type="text"
            id="pais_ent"
            v-model="clienteForm.pais_ent"
            required
          />
        </div>
        <div class="form-group"></div>
        <div class="form-group full-width">
          <label for="complemento_ent">Complemento:</label>
          <input
            type="text"
            id="complemento_ent"
            v-model="clienteForm.complemento_ent"
          />
        </div>
        <div class="form-group"></div>

        <button class="button" type="submit" :disabled="isSubmitting">
          Cadastrar Cliente
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

interface clienteForm {
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
    const isSubmitting = ref(false);
    const clienteForm = ref<clienteForm>({
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

    const createCliente = async () => {
      // if (isSubmitting.value) return;
      // isSubmitting.value = true;
      try {
        const response = await axios.post(
          "http://localhost:5052/api/cliente/create",
          clienteForm.value
        );
        console.log(response);
      } catch (error) {
        console.error("Erro ao enviar:", error);
      }
    };

    return {
      clienteForm,
      createCliente,
      isSubmitting,
    };
  },
});
</script>

<style scoped>
.button {
  padding: 10px 20px;
  background-color: #3498db; /* Azul claro */
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 25px;
  margin-right: 50px;
  margin-left: 25px;
}

.button:hover {
  background-color: #2980b9; /* Azul um pouco mais escuro */
  transform: translateY(-2px); /* Leve elevação */
}

.button:active {
  background-color: #1a5e7d; /* Azul mais escuro ao clicar */
  transform: translateY(0); /* Volta ao nível inicial */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.button:disabled {
  background-color: #bdc3c7; /* Cinza claro para desabilitado */
  cursor: not-allowed;
  opacity: 0.7;
}

.cadastro-clientes {
  padding: 20px;
  text-align: center; /* Centraliza o texto da página */
  /* margin-top: -40px;  */
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}

.full-width {
  grid-column: span 3;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
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
