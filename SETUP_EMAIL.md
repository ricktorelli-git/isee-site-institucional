# 📧 Configuração de Envio de Emails - Iseecodes

## Análise do Projeto

O projeto utiliza **EmailJS** para envio de emails através do formulário de contato. Existem duas abordagens implementadas:

1. **Frontend** (Client-side): Utiliza `@emailjs/browser` no `contact-section.tsx`
2. **Backend** (Server-side): Implementa API Route em `app/api/contact/route.ts`

---

## 🔴 Status Atual: ⚠️ NÃO FUNCIONARÁ SEM CONFIGURAÇÃO

### Problemas Identificados:

#### 1. **Variáveis de Ambiente Não Configuradas**
- ❌ `.env` não existe
- ❌ Variáveis `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` e `NEXT_PUBLIC_EMAILJS_USER` não estão definidas
- ❌ Backend também procura por `EMAILJS_PRIVATE_KEY`

#### 2. **Duplicação de Lógica**
- O código frontend (`contact-section.tsx`) envia direto para EmailJS
- O backend (`app/api/contact/route.ts`) também tenta enviar, mas não é acionado
- Conflito: Qual rota deve ser utilizada?

#### 3. **Segurança Potencial**
- Chaves EmailJS expostas no frontend (aceitável apenas para chaves públicas)
- Backend não está sendo utilizado (redundante)

---

## 📋 O Que Precisa Ser Feito

### **Passo 1: Criar Conta e Configurar EmailJS**

1. Acesse [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Faça login ou crie uma conta gratuita
3. Vá para **Account** → **API Keys**
4. Copie:
   - ✅ `Public Key` → `NEXT_PUBLIC_EMAILJS_USER`
   - ⚠️ `Private Key` (opcional) → `EMAILJS_PRIVATE_KEY`

5. Crie um novo **Email Service**:
   - Nome: Pode ser qualquer um (ex: "Gmail", "SMTP Custom")
   - Tipo: Gmail, Outlook, SMTP Custom, etc.
   - Dados de autenticação do seu email

6. Copie o **Service ID** → `NEXT_PUBLIC_EMAILJS_SERVICE_ID`

### **Passo 2: Criar Template de Email**

1. Em EmailJS Dashboard, vá para **Email Templates**
2. Clique em **Create New Template**
3. **Nome do Template**: `contact_form`
4. Configure o template com as seguintes variáveis:

```html
<!-- Template HTML Sugerido -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Nova Mensagem de Contato</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h2 style="color: #0080C1;">Nova Mensagem de Contato</h2>
      
      <p><strong>Nome:</strong> {{from_name}}</p>
      <p><strong>Email:</strong> {{from_email}}</p>
      <p><strong>Telefone:</strong> {{from_phone}}</p>
      <p><strong>Empresa:</strong> {{company}}</p>
      
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
      
      <h3 style="color: #0080C1;">Mensagem:</h3>
      <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 4px;">{{message}}</p>
      
      <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
      
      <p style="color: #999; font-size: 12px;">
        Mensagem enviada via formulário de contato em www.iseecodes.com.br
      </p>
    </div>
  </body>
</html>
```

5. Copie o **Template ID** → `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

### **Passo 3: Criar Arquivo `.env.local`**

Na raiz do projeto, crie um arquivo `.env.local`:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_USER=your_public_key_xxxxxxxxxxxxx

# Backend (opcional)
EMAILJS_PRIVATE_KEY=your_private_key_xxxxxxxxxxxxx
```

**Onde obter os valores:**
- 📌 **Service ID**: Dashboard → Services → seu serviço
- 📌 **Template ID**: Dashboard → Email Templates → seu template
- 📌 **Public Key**: Dashboard → API Keys → Public Key
- 📌 **Private Key**: Dashboard → API Keys → Private Key (opcional)

---

## 🔍 Análise do Código

### **Frontend (`contact-section.tsx`)**
```typescript
// ✅ Utilizando @emailjs/browser
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_USER

await emailjs.send(
  serviceId,
  templateId,
  {
    name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    company: formData.company || "Não informado",
    message: formData.message,
  },
  publicKey,
)
```

**Status**: ✅ Correto, mas precisa das variáveis de ambiente

---

### **Backend (`app/api/contact/route.ts`)**
```typescript
// ⚠️ Implementação redundante
// Também tenta enviar via EmailJS
// Não está sendo acionada pelo frontend
```

**Recomendação**: 
- ❌ **Remover** (não é necessário com frontend funcionando)
- ✅ **OU** Refatorar para usar `app/contact` com rota server

---

## 🎯 Recomendação Final

### **Opção 1: Client-Side (Atual - Recomendado para simplicidade)**
- Manter apenas `contact-section.tsx`
- ✅ Mais rápido (sem roundtrip ao servidor)
- ⚠️ Limite de 200 emails/dia no plano gratuito
- ✅ Perfeito para sites pequenos

**Ação necessária:**
1. Configurar `.env.local` com chaves EmailJS
2. Deletar ou desativar `app/api/contact/route.ts`

---

### **Opção 2: Server-Side (Mais seguro)**
- Usar apenas `app/api/contact/route.ts`
- ✅ Maior segurança (chaves privadas não expostas)
- ✅ Sem limite de emails (usando SMTP direto)
- ⚠️ Requer configuração SMTP
- ⚠️ Um pouco mais lento (roundtrip)

**Ação necessária:**
1. Remover lógica EmailJS do `contact-section.tsx`
2. Fazer POST para `/api/contact`
3. Configurar `.env.local` com chaves privadas

---

## 📋 Checklist de Implementação

### Client-Side (Recomendado)
- [ ] Criar conta em [EmailJS](https://www.emailjs.com)
- [ ] Configurar Email Service (Gmail, SMTP, etc)
- [ ] Criar Email Template com variáveis `{{from_name}}`, `{{from_email}}`, `{{from_phone}}`, `{{company}}`, `{{message}}`
- [ ] Copiar Service ID, Template ID e Public Key
- [ ] Criar arquivo `.env.local` na raiz do projeto
- [ ] Adicionar variáveis: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_USER`
- [ ] Testar formulário de contato
- [ ] Verificar se email chega na caixa de entrada

### Varredura de Segurança
- [ ] Confirmar que `NEXT_PUBLIC_*` são apenas chaves públicas
- [ ] Não expor chaves privadas no Git
- [ ] `.env.local` está no `.gitignore`
- [ ] `.env.example` tem template sem valores reais

---

## 🧪 Teste Manual

1. Preencher formulário de contato:
   - Nome: "João Silva"
   - Email: seu-email@exemplo.com
   - Telefone: (11) 99999-9999
   - Empresa: "Exemplo LTDA"
   - Mensagem: "Teste de envio"

2. Clicar em "Enviar Mensagem"

3. Verificar:
   - [ ] Modal de sucesso aparece com animação
   - [ ] Email chega na caixa de entrada configurada em EmailJS
   - [ ] Dados correspondem ao formulário preenchido

---

## 🐛 Troubleshooting

### "Configuração de email incompleta"
- ❌ Variáveis de ambiente não configuradas
- ✅ Verificar `.env.local`
- ✅ Reiniciar servidor Next.js (`npm run dev`)

### Email não chega
- ❌ Service ID ou Template ID incorretos
- ❌ Variáveis de ambiente não carregadas
- ✅ Verificar no EmailJS Dashboard se template está ativo
- ✅ Verificar SPAM/Lixo eletrônico

### "Erro ao enviar mensagem"
- ❌ Limite de emails/mês excedido (plano gratuito)
- ❌ Email do serviço não verificado no Gmail/Outlook
- ✅ Aguardar reset mensal ou fazer upgrade

---

## 📚 Recursos Úteis

- [EmailJS Documentação](https://www.emailjs.com/docs)
- [EmailJS - Primeiros Passos](https://www.emailjs.com/docs/sdk/installation)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

---

**Última atualização**: 2025-03-05  
**Status**: ⚠️ Não configurado - Aguardando setup de variáveis de ambiente

