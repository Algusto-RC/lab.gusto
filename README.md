# lab.gusto

Um laboratório pessoal de ferramentas digitais e projetos autorais. Este repositório contém o site estático de apresentação, criado para reunir utilitários úteis e mostrar como cada projeto evolui.

## Visão geral

- Identidade visual baseada na paleta roxa e azul marinho do projeto.
- Layout responsivo para desktop e dispositivos móveis.
- Catálogo de ferramentas com busca e filtros por categoria.
- Janelas de detalhes para apresentar o status e a plataforma de cada ferramenta.
- Sem dependências de build: HTML, CSS e JavaScript puros.

## Ferramentas apresentadas

- **YouTube → MP3 / MP4** — aplicativo para Windows; o site apresenta o projeto e não simula conversões online.
- **JSON Formatter** — planejado.
- **Timer de foco** — planejado.

## Executar localmente

Abra `index.html` diretamente no navegador ou rode um servidor estático na pasta do projeto, por exemplo:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Estrutura

```text
site-tools/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Próximos passos

- Conectar a ficha do conversor ao instalador ou à página de releases do aplicativo.
- Implementar as ferramentas web planejadas.
- Publicar o site e adicionar links de contato e perfis profissionais.
