<template>
  <div class="registro-list">
    <h2>Lista de Registros</h2>
    <ul v-if="registros.length">
      <li
        v-for="registro in registros"
        :key="registro.id"
        class="registro-item"
        @click="editarRegistro(registro.id)"
      >
        <!-- <strong>ID:</strong> {{ registro.id }}  -->

        <strong>Nome:</strong> {{ registro.nome }}
        <br />
        <strong>CNPJ:</strong>
        {{ registro.cnpj }}
      </li>
    </ul>
    <p v-else>Nenhum registro encontrado.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

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

export default defineComponent({
  name: "ListaClientes",
  setup() {
    const registros = ref<Cliente[]>([]); // Lista de registros

    const router = useRouter();

    const editarRegistro = (id: string) => {
      router.push(`/editar-cliente/${id}`);
    };

    const fetchRegistros = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5052/api/cliente/consult/all"
        ); // Substitua pelo seu endpoint
        console.log(response);
        registros.value = response.data.data;
      } catch (error) {
        console.error("Erro ao buscar registros:", error);
      }
    };

    // Chama a função de busca ao montar o componente
    onMounted(fetchRegistros);

    return {
      registros,
      editarRegistro,
    };
  },
});
</script>

<style scoped>
.registro-list {
  padding: 20px;
  display: flex; /* Usar flexbox para melhor gerenciamento do layout */
  flex-direction: column; /* Alinha os itens em uma coluna */
  height: 100%; /* Ocupar toda a altura do contêiner pai */
}
h2 {
  color: #333;
}

ul {
  list-style-type: none; /* Remove os marcadores da lista */
  padding: 0; /* Remove o preenchimento padrão */
}

li {
  margin: 10px 0; /* Espaçamento entre os itens */
  padding: 10px;
  background-color: #f4f4f4; /* Cor de fundo dos itens da lista */
  border-radius: 5px; /* Cantos arredondados */
}
.registro-item {
  cursor: pointer; /* Altera o cursor ao passar por cima do item */
}
</style>
