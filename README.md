# 🌽 Arraiá Pedagógico - Landing Page

> Landing page profissional de alta conversão para o produto digital **Arraiá Pedagógico Pronto para Imprimir** da marca **Minha Aula Pronta**.

Este repositório contém os arquivos de código-fonte de uma landing page moderna, responsiva e otimizada para a venda de um kit pedagógico em PDF contendo atividades e recursos temáticos para Festa Junina na Educação Infantil e Ensino Fundamental Anos Iniciais.

---

## 🎨 Design & Funcionalidades

A landing page foi desenvolvida focando em uma excelente experiência visual (Premium Aesthetics) e alta conversão, contendo:

*   **Banner de Urgência:** Contador regressivo persistente de 8 minutos (controlado via `localStorage`) para incentivar a conversão imediata.
*   **Hero Section Impactante:** Título forte com gradiente de cores, lista de benefícios em marcadores e imagem tridimensional em mockup do produto principal.
*   **Seção de Dores (Agitação):** Quatro cartões interativos (Pesquisas Exaustivas, Criar tudo do zero, Falta de tempo e Burocracia da BNCC) no estilo *glassmorphism*.
*   **Carrossel Galeria Interativo:** Apresenta prévias reais das páginas do arquivo PDF com suporte a zoom em lightbox (janela modal) ao clicar.
*   **Seção de Bônus (10 itens):** Exibição detalhada de todos os recursos extras (tags, medalhas, coroas, painel, cartões, etc.) usando ícones em SVG integrados.
*   **Prova Social / Depoimentos:** Seção estilizada com avatares e relatos reais de professoras que já utilizam o material.
*   **Oferta com Tabela de Preços:** Destaque para o preço promocional (R$ 14,99) com alertas visuais e botão com animação de pulso.
*   **Seção de FAQ Dinâmica:** Perguntas e respostas frequentes desenvolvidas nativamente com a tag HTML `<details>` para navegação fluida.

---

## 📁 Estrutura de Arquivos

O projeto é estruturado de forma simples e limpa, utilizando tecnologias nativas (Vanilla HTML, CSS e JS):

```text
├── index.html                  # Estrutura HTML5 semântica e SEO otimizado
├── styles.css                  # Estilização com design system moderno (CSS Variables, Flexbox, Grid)
├── script.js                   # Lógica do FAQ, cronômetro persistente, carrossel e lightbox
├── produto-arraia-pedagogico.md# Documentação interna contendo a especificação do produto
├── Logo Minha Aula Pronta.png  # Logotipo oficial da marca no rodapé/cabeçalho
├── capa.png                    # Imagem de destaque (mockup) utilizada na Hero Section
├── Paginas/                    # Diretório contendo as imagens de prévia do PDF do material
└── images/                     # Diretório contendo imagens auxiliares (ex: avatares das clientes)
```

---

## 🚀 Como Executar Localmente

Como a landing page é feita com tecnologias web nativas, não há necessidade de etapas complexas de compilação ou instalação de dependências.

### Opção 1: Abertura Direta
Basta abrir o arquivo `index.html` diretamente em qualquer navegador moderno.

### Opção 2: Servidor Local (Recomendado)
Para uma experiência perfeita com o carregamento de recursos e funcionamento adequado do `localStorage` sem restrições de protocolo `file://`, você pode rodar um servidor de desenvolvimento simples:

**Usando Node.js (se instalado):**
```bash
# Executa um servidor http estático simples
npx serve .
```

**Usando Extensão VS Code:**
Você também pode usar a extensão **Live Server** no VS Code para iniciar um servidor local com apenas um clique.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5** (Tags semânticas para melhor acessibilidade e SEO)
*   **CSS3** (CSS Variables, Glassmorphism, Flexbox, Grid, Keyframes para animações suaves)
*   **JavaScript (ES6+)** (Manipulação de DOM nativa, Event Listeners, LocalStorage)

---

## 🏷️ SEO & Acessibilidade

O projeto foi construído seguindo boas práticas de:
*   Estrutura de cabeçalhos semânticos (`<h1>` único, seguidos de `<h2>`, `<h3>`).
*   Atributos `aria-label` e `aria-hidden` para melhor leitura em leitores de tela.
*   Otimizações de performance (como imagens com `loading="lazy"` na galeria e `fetchpriority="high"` no banner principal).
