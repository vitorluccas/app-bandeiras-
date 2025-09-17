import { ref, computed } from 'vue'
/*
# O defineStore é a função principal do Pinia para criar uma store.
# Uma store é como um “banco de dados central” da sua aplicação Vue,
# onde você guarda e organiza estados e funções reutilizáveis.
*/
import { defineStore } from 'pinia'


/*
# Aqui você está criando uma store com o id flag, que é usado apenas 
# como referencia para que não tenhamos objetos repetidos
# O nome da nome da constante exportada (useFlagStore) é apenas uma convenção:
#  * Sempre começa com use para indicar que é um hook (como no Vue ou React).
#  * Esse será o nome que você vai usar para chamar a store nos seus componentes.
*/
export const useFlagStore = defineStore('flag', () => {
  const flags = ref([
    {
      id: 1,
      name: 'Chile',
      image: '001-chile.png',
    },
    {
      id: 2,
      name: 'Irlanda',
      image: '002-ireland.png',
    },
    {
      id: 3,
      name: 'Grécia',
      image: '003-greece.png',
    },
    {
      id: 4,
      name: 'Noruega',
      image: '004-norway.png',
    },
    {
      id: 5,
      name: 'Israel',
      image: '005-israel.png',
    },
    {
      id: 6,
      name: 'Guatemala',
      image: '006-guatemala.png',
    },
    {
      id: 7,
      name: 'Cuba',
      image: '007-cuba.png',
    },
    {
      id: 8,
      name: 'Croácia',
      image: '008-croatia.png',
    },
    {
      id: 9,
      name: 'Panamá',
      image: '009-panama.png',
    },
    {
      id: 10,
      name: 'África do Sul',
      image: '010-south africa.png',
    },
    {
      id: 11,
      name: 'Iran',
      image: '011-iran.png',
    },
    {
      id: 12,
      name: 'Egypt',
      image: '012-egypt.png',
    },
    {
      id: 13,
      name: 'Morocco',
      image: '013-morocco.png',
    },
    {
      id: 14,
      name: 'Denmark',
      image: '014-denmark.png',
    },
    {
      id: 15,
      name: 'Czech Republic',
      image: '015-czech republic.png',
    },
    {
      id: 16,
      name: 'Finland',
      image: '016-finland.png',
    },
    {
      id: 17,
      name: 'Sweden',
      image: '017-sweden.png',
    },
    {
      id: 18,
      name: 'Philippines',
      image: '018-philippines.png',
    },
    {
      id: 19,
      name: 'England',
      image: '019-england.png',
    },
    {
      id: 20,
      name: 'Switzerland',
      image: '020-switzerland.png',
    },
    {
      id: 21,
      name: 'Turkey',
      image: '021-turkey.png',
    },
    {
      id: 22,
      name: 'Portugal',
      image: '022-portugal.png',
    },
    {
      id: 23,
      name: 'Reino Unido',
      image: '023-united kingdom.png',
    },
    {
      id: 24,
      name: 'Colombia',
      image: '024-colombia.png',
    },
    {
      id: 25,
      name: 'Argentina',
      image: '025-argentina.png',
    },
    {
      id: 26,
      name: 'India',
      image: '026-india.png',
    },
    {
      id: 27,
      name: 'United States Of America',
      image: '027-united states of america.png',
    },
    {
      id: 28,
      name: 'Thailand',
      image: '028-thailand.png',
    },
    {
      id: 29,
      name: 'Canadá',
      image: '029-canada.png',
    },
    {
      id: 30,
      name: 'México',
      image: '030-mexico.png',
    },
    {
      id: 31,
      name: 'Itália',
      image: '031-italy.png',
    },
    {
      id: 32,
      name: 'Espanha',
      image: '032-spain.png',
    },
    {
      id: 33,
      name: 'China',
      image: '033-china.png',
    },
    {
      id: 34,
      name: 'Uruguay',
      image: '034-uruguay.png',
    },
    {
      id: 35,
      name: 'Alemanha',
      image: '035-germany.png',
    },
    {
      id: 36,
      name: 'França',
      image: '036-france.png',
    },
    {
      id: 37,
      name: 'Japão',
      image: '037-japan.png',
    },
    {
      id: 38,
      name: 'South Korea',
      image: '038-south korea.png',
    },
    {
      id: 39,
      name: 'North Korea',
      image: '039-north korea.png',
    },
    {
      id: 40,
      name: 'Saudi Arabia',
      image: '040-saudi arabia.png',
    },
    {
      id: 41,
      name: 'Honduras',
      image: '041-honduras.png',
    },
    {
      id: 42,
      name: 'Curacao',
      image: '042-curacao.png',
    },
    {
      id: 43,
      name: 'Equatorial Guinea',
      image: '043-equatorial guinea.png',
    },
    {
      id: 44,
      name: 'Libya',
      image: '044-libya.png',
    },
    {
      id: 45,
      name: 'Sudan',
      image: '045-sudan.png',
    },
    {
      id: 46,
      name: 'Turkmenistan',
      image: '046-turkmenistan.png',
    },
    {
      id: 47,
      name: 'Togo',
      image: '047-togo.png',
    },
    {
      id: 48,
      name: 'Somalia',
      image: '048-somalia.png',
    },
    {
      id: 49,
      name: 'Mauritius',
      image: '049-mauritius.png',
    },
    {
      id: 50,
      name: 'Montenegro',
      image: '050-montenegro.png',
    },
  ])

  return { flags }
})