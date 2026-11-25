# lab.gusto

Um laboratório pessoal de ferramentas digitais e projetos autorais. A home reúne os projetos e cada cartão leva a uma página própria com contexto, proposta, funcionalidades e status.

## Projetos

- **YouTube → MP3 / MP4** — aplicativo para Windows disponível.
- **Fotos Aprimoradas** — ferramenta para aprimorar imagens, em planejamento.
- **Norte** — aplicativo mobile inspirado no GTD, em desenvolvimento.
- **Preço Certo** — pesquisa de ofertas disponíveis e cupons, em planejamento.

## Visão geral

- Interface responsiva construída com HTML, CSS e JavaScript puros.
- Busca e filtros por tipo de projeto.
- Quatro páginas dedicadas em `projects/`, com navegação de volta à home.
- Não há dependências de build.

## Executar localmente

Abra `index.html` no navegador ou sirva a pasta com um servidor estático, por exemplo:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Estrutura

```text
site-tools/
├── index.html
├── styles.css
├── app.js
├── README.md
└── projects/
    ├── youtube-conversor.html
    ├── fotos-aprimoradas.html
    ├── norte.html
    ├── preco-certo.html
    └── project.css
```

O conversor continua sendo um aplicativo desktop. A página do site apresenta seu funcionamento e tecnologias, mas não realiza conversões online. Os outros três projetos aparecem com os status informados na página inicial.
