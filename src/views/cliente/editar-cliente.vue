<!-- src/views/CadastroClientes.vue -->
<template>
  <div class="cadastro-clientes">
    <form @submit.prevent="editaCliente">
      <div class="grid-container">
        <div class="form-group">
          <label for="idRegistro">ID Registro:</label>
          <input type="text" id="idRegistro" v-model="idRegistro" disabled />
        </div>
        <div class="form-group">
          <label for="cnpj">CNPJ:</label>
          <input
            type="text"
            id="cnpj"
            required
            v-model="clienteForm.cnpj"
            @change="validaCnpj"
          />
        </div>
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="clienteForm.nome" required />
        </div>
        <div class="form-group">
          <label for="fornecedor_id">Fornecedor:</label>
          <select id="fornecedor_id" v-model="clienteForm.fornecedor_id">
            <option value="" disabled>Selecione um fornecedor</option>
            <!-- <option
              v-for="fornecedor in fornecedores"
              :key="fornecedor.id"
              :value="fornecedor.id"
            >
              {{ fornecedor.nome }}
            </option> -->
          </select>
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
            @change="validaCepCob"
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
      <div><h2>Endereço de Entrega</h2></div>
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
            @change="validaCepEnt"
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
          Salvar Cliente
        </button>

        <button class="button" type="button" @click="deleteCliente">
          Excluir Cliente
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute, useRouter } from "vue-router";

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
  name: "EditarClientes",
  setup() {
    const isSubmitting = ref(false);
    const router = useRouter();
    const idRegistro = useRoute()?.params?.idRegistro;

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

    interface Cliente {
      id: string;
      cnpj: string;
      nome: string;
      fornecedor_id: string;
      bairro_cob: string;
      bairro_ent: string;
      cep_cob: string;
      cep_ent: string;
      cidade_cob: string;
      cidade_ent: string;
      complemento_cob: string;
      complemento_ent: string;
      estado_cob: string;
      estado_ent: string;
      pais_cob: string;
      pais_ent: string;
      rua_cob: string;
      rua_ent: string;
      create_at?: Date;
      update_at?: Date;
    }
    const getRegistro = ref<Cliente[]>([]);

    const getRegistroById = async () => {
      try {
        let response = await axios.get(
          `http://localhost:5052/api/cliente/consult/${idRegistro}`
        );
        const clienteConsultado: Cliente = response.data.data.at(0);
        clienteForm.value.cnpj = clienteConsultado?.cnpj;
        clienteForm.value.nome = clienteConsultado?.nome;
        // clienteForm.value.fornecedor_id = clienteConsultado?.fornecedor_id;
        clienteForm.value.bairro_cob = clienteConsultado?.bairro_cob;
        clienteForm.value.cep_cob = clienteConsultado?.cep_cob;
        clienteForm.value.cidade_cob = clienteConsultado?.cidade_cob;
        clienteForm.value.complemento_cob = clienteConsultado?.complemento_cob;
        clienteForm.value.estado_cob = clienteConsultado?.estado_cob;
        clienteForm.value.pais_cob = clienteConsultado?.pais_cob;
        clienteForm.value.rua_cob = clienteConsultado?.rua_cob;
        clienteForm.value.bairro_ent = clienteConsultado?.bairro_ent;
        clienteForm.value.cep_ent = clienteConsultado?.cep_ent;
        clienteForm.value.cidade_ent = clienteConsultado?.cidade_ent;
        clienteForm.value.complemento_ent = clienteConsultado?.complemento_ent;
        clienteForm.value.estado_ent = clienteConsultado?.estado_ent;
        clienteForm.value.pais_ent = clienteConsultado?.pais_ent;
        clienteForm.value.rua_ent = clienteConsultado?.rua_ent;
      } catch (error) {
        console.error("Erro ao buscar registro:", error);
      }
    };

    const editaCliente = async () => {
      try {
        const response = await axios.put(
          `http://localhost:5052/api/cliente/update/${idRegistro}`,
          clienteForm.value
        );
        console.log(response.data.status);
        if (!response.data.status) {
          throw new Error("Erro ao atualizar cliente");
        }
        await Swal.fire({
          title: "Cliente Atualizado!",
          text: "Cliente editado com sucesso!",
          icon: "success",
          confirmButtonText: "Ok",
          customClass: {
            popup: "custom-popup",
          },
        });
        router.push(`/lista-clientes`);
      } catch (error) {
        await Swal.fire({
          title: "Erro ao Atualizar cliente!",
          icon: "error",
          confirmButtonText: "Ok",
          customClass: {
            popup: "custom-popup",
          },
        });
        console.log(error);
      }
    };

    const deleteCliente = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:5052/api/cliente/delete/${idRegistro}`
        );

        await Swal.fire({
          title: "Cliente Excluído!",
          text: "Cliente excluido com sucesso!",
          icon: "success",
          confirmButtonText: "Ok",
          customClass: {
            popup: "custom-popup",
          },
        });
        router.push(`/lista-clientes`);
      } catch (error) {
        console.log("Erro ao deletar:", error);
      }
    };

    const validaCnpj = async () => {
      clienteForm.value.cnpj = clienteForm.value.cnpj.replace(/\D/g, "");
      const cnpjLimpo = clienteForm.value.cnpj;

      if (cnpjLimpo.length !== 14 && cnpjLimpo.length !== 0) {
        Swal.fire({
          title: "Erro CNPJ!",
          text: "CNPJ deve contter 14 digitos",
          icon: "warning",
          confirmButtonText: "Ok",
          customClass: {
            popup: "custom-popup", // Classe personalizada, se você quiser adicionar
          },
        });
        clienteForm.value.cnpj = "";
        return;
      }
      if (/^(\d)\1+$/.test(cnpjLimpo)) {
        Swal.fire({
          title: "Erro CNPJ!",
          text: "CNPJ inválido!",
          icon: "warning",
          confirmButtonText: "Ok",
          customClass: {
            popup: "custom-popup", // Classe personalizada, se você quiser adicionar
          },
        });
        clienteForm.value.cnpj = "";
        return;
      }
      let soma = 0;
      let peso = 5;

      for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpjLimpo.charAt(i), 10) * peso;
        peso = peso === 2 ? 9 : peso - 1;
      }

      let digito1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      if (parseInt(cnpjLimpo.charAt(12), 10) === digito1) {
        soma = 0;
        peso = 6;
        for (let i = 0; i < 13; i++) {
          soma += parseInt(cnpjLimpo.charAt(i), 10) * peso;
          peso = peso === 2 ? 9 : peso - 1;
        }

        let digito2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        console.log(parseInt(cnpjLimpo.charAt(13), 10));

        if (parseInt(cnpjLimpo.charAt(13), 10) !== digito2) {
          Swal.fire({
            title: "Erro CNPJ!",
            text: "CNPJ inválido!",
            icon: "warning",
            confirmButtonText: "Ok",
            customClass: {
              popup: "custom-popup",
            },
          });
          clienteForm.value.cnpj = "";
          return;
        } else {
          try {
            const response = await axios.post(
              `http://localhost:4001/api/ConsultCnpj`,
              { cnpj: cnpjLimpo }
            );
            clienteForm.value.nome = response.data.nome;
            clienteForm.value.bairro_cob = response.data.bairro;
            clienteForm.value.cep_cob = response.data.cep;
            clienteForm.value.cidade_cob = response.data.municipio;
            clienteForm.value.complemento_cob = response.data.complemento;
            clienteForm.value.estado_cob = response.data.uf;
            clienteForm.value.pais_cob = "Brasil";
            clienteForm.value.rua_cob = response.data.logradouro;
          } catch (error) {
            console.error("Erro ao buscar registro:", error);
          }
          return;
        }
      }
    };

    async function consultaCep(cep: string) {
      if (cep == "" || cep == null) {
        return;
      }
      try {
        const response = await axios.post(
          `http://localhost:4001/api/cep/${cep}`
        );
        clienteForm.value.bairro_ent = response.data.bairro;
        clienteForm.value.cep_ent = response.data.cep;
        clienteForm.value.cidade_ent = response.data.localidade;
        clienteForm.value.rua_ent = response.data.logradouro;
        clienteForm.value.estado_ent = response.data.uf;
        clienteForm.value.pais_ent = "Brasil";
        return;
      } catch (error) {
        console.log("Erro ao buscar CEP");
      }
    }

    const validaCepCob = () => {
      clienteForm.value.cep_cob = clienteForm.value.cep_cob.replace(/\D/g, "");
      const regex = /^\d{5}-?\d{3}$/;
      if (!regex.test(clienteForm.value.cep_cob)) {
        Swal.fire({
          title: "Erro CEP!",
          text: "CEP inválido!",
          icon: "warning",
          confirmButtonText: "Ok",
          customClass: {
            popup: "custom-popup", // Classe personalizada, se você quiser adicionar
          },
        });
        clienteForm.value.cep_cob = "";
        return;
      }
    };

    const validaCepEnt = () => {
      clienteForm.value.cep_ent = clienteForm.value.cep_ent.replace(/\D/g, "");
      const regex = /^\d{5}-?\d{3}$/;
      if (!regex.test(clienteForm.value.cep_cob)) {
        Swal.fire({
          title: "Erro CEP!",
          text: "CEP inválido!",
          icon: "warning",
          confirmButtonText: "Ok",
          customClass: {
            popup: "custom-popup", // Classe personalizada, se você quiser adicionar
          },
        });
        clienteForm.value.cep_cob = "";
        return;
      } else {
        consultaCep(clienteForm.value.cep_ent);
        return;
      }
    };

    onMounted(getRegistroById);

    return {
      clienteForm,
      editaCliente,
      isSubmitting,
      validaCnpj,
      validaCepCob,
      validaCepEnt,
      idRegistro,
      getRegistro,
      deleteCliente,
    };
  },
});
</script>

<style scoped>
.custom-popup {
  border-radius: 10px;
  background-color: #f0f8ff;
  color: #333;
}
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

select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* Faz os inputs ocuparem toda a largura do grupo */
}

option {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* Faz os inputs ocuparem toda a largura do grupo */
}
</style>
