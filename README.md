# Iseecodes - Site Institucional

Site institucional da **Iseecodes Desenvolvimento Web Ltda**, software house brasileira especializada em soluções web e mobile com foco em gestão financeira.

---

## Stack Tecnológica

### Framework & Runtime
- **Next.js** - Framework React com App Router e Server Components
- **React** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para maior segurança e produtividade

### Estilização
- **Tailwind CSS v4** - Framework CSS utility-first
- **CSS Animations** - Animações customizadas para efeitos visuais dinâmicos
- **Design Tokens** - Sistema de cores e variáveis CSS para consistência visual

### Componentes UI
- **shadcn/ui** - Biblioteca de componentes acessíveis e customizáveis
- **Radix UI** - Primitivos de UI sem estilo para acessibilidade
- **Lucide React** - Ícones SVG otimizados
- **React Icons** - Ícones de redes sociais e marcas

### Funcionalidades
- **@emailjs/browser** - Integração para envio de emails direto do navegador
- **Intersection Observer API** - Detecção de scroll para animações e navegação ativa
- **Responsive Design** - Layout adaptativo para todos os dispositivos

### Fontes
- **Inter** - Fonte sans-serif moderna para textos
- **Outfit** - Fonte display para títulos e destaques

---

## Estrutura do Projeto

```
├── app/
│   ├── globals.css           # Estilos globais e design tokens
│   ├── layout.tsx            # Layout principal com fontes e metadata
│   └── page.tsx              # Página principal com todas as seções
├── components/
│   ├── header.tsx            # Navbar com transição de cor no scroll
│   ├── hero-section.tsx      # Seção hero com efeito typewriter
│   ├── services-section.tsx  # Seção de serviços oferecidos
│   ├── process-section.tsx   # Metodologia em 5 etapas (timeline)
│   ├── founder-section.tsx   # Declaração do fundador
│   ├── tech-section.tsx      # Infraestrutura robusta
│   ├── contact-section.tsx   # Formulário de contato com máscara
│   ├── footer.tsx            # Rodapé com links e redes sociais
│   └── scroll-to-top.tsx     # Botão flutuante voltar ao topo
├── public/
│   ├── robots.txt            # Configuração para crawlers
│   ├── sitemap.xml           # Mapa do site para SEO
│   └── ...                   # Assets estáticos
└── README.md
```

---

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Primário | `#0080C1` | Elementos principais, CTAs |
| Laranja Accent | `#F58634` | Destaques, hover states |
| Laranja Suave | `#F9A05F` | Navbar no scroll |
| Azul Escuro | `#005484` | Fundos escuros, seções alternadas |
| Branco | `#FFFFFF` | Fundos claros, textos em fundo escuro |

---

## Funcionalidades Principais

### Navegação Inteligente
- Indicador visual de seção ativa baseado no scroll
- Transição de cor da navbar (transparente → laranja suave) ao rolar
- Cores do menu adaptativas (branco no hero, azul no scroll)
- Preview de hover nos links de navegação
- Menu mobile responsivo

### Animações
- Efeito typewriter no título principal com cursor
- Gradient orbs e linhas diagonais animadas no hero (CSS puro)
- Cards com fade-in sequencial ao entrar na viewport
- Borda laranja progressiva nos cards da metodologia
- Ícones com animações de hover personalizadas no footer
- Seta indicadora de scroll com bounce animation

### Formulário de Contato
- Máscara de telefone brasileira (00) 00000-0000
- Validação de campos obrigatórios
- Integração com EmailJS via biblioteca cliente
- Mensagem de sucesso com animação de fragmentação

### SEO
- Metadata otimizada com Open Graph e Twitter Cards
- robots.txt e sitemap.xml configurados
- Tags semânticas e acessibilidade (aria-labels, roles)

### Performance
- Animações CSS com GPU acceleration (will-change, transform)
- Lazy loading em imagens abaixo da dobra
- Componentes memoizados (React.memo, useCallback, useMemo)
- Scroll listeners otimizados com requestAnimationFrame

---

## Variáveis de Ambiente

Configure na seção Vars do v0 ou no seu ambiente:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

> Nota: A Public Key do EmailJS é segura para expor no cliente - foi projetada para uso no navegador.

---

## Deploy

O projeto está pronto para deploy na Vercel:
1. Conecte o repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático

---

## Análise Técnica do Projeto

### Arquitetura

| Aspecto | Status | Observação |
|---------|--------|------------|
| App Router (Next.js) | Correto | Estrutura moderna de rotas |
| Componentização | Correto | Cada seção em arquivo separado |
| Separação de responsabilidades | Correto | UI, lógica e estilos organizados |
| TypeScript | Correto | Tipagem em todo o projeto |

### Boas Práticas Aplicadas

- Hooks nativos do React (useState, useEffect, useCallback, useMemo)
- Otimização de performance (React.memo, lazy loading, requestAnimationFrame)
- Acessibilidade (aria-labels, semantic HTML, sr-only)
- SEO (metadata, Open Graph, robots.txt, sitemap.xml)
- CSS com design tokens (variáveis no globals.css)
- Responsividade (mobile-first com breakpoints Tailwind)

### Distribuição de Tecnologias nas Dinâmicas

| Dinâmica | Tecnologia |
|----------|------------|
| Efeito typewriter | React (useState + useEffect + setTimeout) |
| Scroll detection (navbar, badge) | React (useState + useEffect + window.scroll) |
| Animações de entrada | CSS (keyframes + animation) |
| Transições hover | Tailwind CSS (transition, hover:) |
| Intersection Observer (cards metodologia) | React (useEffect + IntersectionObserver API) |
| Máscara de telefone | JavaScript puro (regex + onChange) |
| Envio de formulário | EmailJS (@emailjs/browser) |

### Proporção de Código

- ~70% React (useState, useEffect, useCallback, useMemo, JSX)
- ~20% APIs nativas JavaScript (scroll, IntersectionObserver, setTimeout)
- ~10% CSS puro (keyframes, transitions)

### Pontos de Evolução para Projetos Maiores

| Item | Situação Atual | Evolução Possível |
|------|----------------|-------------------|
| Textos hardcoded | Nos componentes | Extrair para `/content/` ou CMS |
| Validação de formulário | Básica (required) | Zod + React Hook Form |
| Testes | Não implementados | Jest + Testing Library |
| i18n | Não implementado | next-intl (se precisar multi-idioma) |

**Conclusão:** Para um site institucional, a estrutura está profissional, limpa e pronta para produção.

---

## Licença

Projeto desenvolvido para **Iseecodes Desenvolvimento Web Ltda**.

© 2025 Iseecodes. Todos os direitos reservados.
