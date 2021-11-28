# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox ou Edge

Os testes funcionais a serem realizados na aplicação são descritos a seguir:

| CASO DE TESTE         | CT- 01 - Carregamento da página Home                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-01 - O site deve apresentar na página principal notícias estáticas incluídas pelo próprio administrador. RF-02 - O site deve apresentar, para cada publicação, uma imagem correspondente ao assunto apresentado. |
| Objetivo do Teste     | Verificar se a carga de notícias está acontecendo corretamente.                                                                                                                                                     |
| Critérios de Êxito    | A página Home deve ser carregada, com as imagens visíveis e todos os links devem direcionar o usuário para as páginas correspondentes a sua seleção.                                                                |

Passos:

- Acessar o Navegador
- Informar o endereço do site - https://portal-geek-puc.vercel.app/
- Visualizar a página principal

| CASO DE TESTE         | CT- 02 - Visualizar detalhes das notícias                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Requisitos Associados | RF-03 - O site deve permitir ao usuário visualizar o texto completo da publicação com todos os detalhes                                     |
| Objetivo do Teste     | Verificar se ao clicar nas imagens e links das páginas de notícias, está ocorrendo o redirecionamento para a página com a notícia completa. |
| Critérios de Êxito    | Ao clicar na imagem ou parágrafo com link deve ser carregada a página com a notícia completa. Título da notícia, imagem destaque e texto.   |

Passos:

- Acessar o Navegador
- Informar o endereço do site - https://portal-geek-puc.vercel.app/
- Clicar nas imagens com links para notícia
- Clicar nos chamadas de notícia com links
