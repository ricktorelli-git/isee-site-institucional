# 🚀 GUIA DE CONFIGURAÇÃO - ENVIO DE EMAILS

## ✅ Status do Projeto

O arquivo `contact-section.tsx` já está **totalmente pronto** para enviar emails. Você precisa apenas:
1. Criar uma conta EmailJS (gratuita)
2. Configurar as 3 variáveis de ambiente
3. Testar o formulário

---

## 📋 PASSO A PASSO

### **Passo 1: Criar Conta EmailJS (5 minutos)**

1. Acesse: https://www.emailjs.com
2. Clique em **"Sign Up"** (canto superior direito)
3. Preencha com seu email e senha
4. Confirme no seu email (verificação)
5. Faça login

---

### **Passo 2: Obter API Keys (2 minutos)**

1. No dashboard, clique em **Account** (menu lateral esquerdo)
2. Vá para **API Keys**
3. Copie a **Public Key** (aquela que começa com `...`)
4. Guarde em um lugar seguro

**Exemplo:**
```
Public Key: rk_public_xxxxxxxxxxxxx
```

---

### **Passo 3: Criar Email Service (5 minutos)**

1. No dashboard, clique em **Email Services** (menu lateral esquerdo)
2. Clique em **Add New Service**
3. Escolha seu provedor de email:
   - ✅ **Gmail** (recomendado - fácil)
   - ✅ **Outlook/Hotmail**
   - ✅ **SMTP Custom** (seu servidor)

#### Se escolher **Gmail**:
- Selecione **Gmail**
- Clique em **Connect with Gmail**
- Autorize a aplicação (ele vai abrir uma janela de login Google)
- **Pronto!** EmailJS agora tem acesso ao seu Gmail

#### Se escolher **Outlook**:
- Selecione **Outlook**
- Insira seu email e senha
- Clique em **Create Service**

#### Se escolher **SMTP**:
- Insira os dados do seu servidor:
  - Host SMTP
  - Porta
  - Email
  - Senha

4. Copie o **Service ID** (começa com `service_`)
5. Guarde em um lugar seguro

**Exemplo:**
```
Service ID: service_a1b2c3d4e5f6g7h8
```

---

### **Passo 4: Criar Email Template (5 minutos)**

1. No dashboard, clique em **Email Templates** (menu lateral esquerdo)
2. Clique em **Create New Template**
3. **Preencha:**
   - Nome: `contact_form`
   - Email Service: Selecione o que você criou no passo 3
   - Email para receber: seu-email@seu-dominio.com (ou seu Gmail)

4. **Na aba "Content"**, edite o template HTML/Texto:

**Substitua todo o conteúdo por:**

```
Subject: Nova mensagem de contato de {{from_name}}

---

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{from_phone}}
Empresa: {{company}}

---

Mensagem:
{{message}}
```

5. Clique em **Save**
6. Copie o **Template ID** (aparece na lista de templates)

**Exemplo:**
```
Template ID: template_x1y2z3a4b5c6d7e8
```

---

### **Passo 5: Configurar Arquivo `.env.local` (2 minutos)**

1. Abra o arquivo `.env.local` na raiz do projeto:
   ```
   /Users/ricktortorelli/www/iseecodes/isee-site-institucional/.env.local
   ```

2. Substitua os valores de exemplo pelos valores reais que você copiou:

```env
# Cole aqui os valores reais (sem aspas)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_a1b2c3d4e5f6g7h8
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_x1y2z3a4b5c6d7e8
NEXT_PUBLIC_EMAILJS_USER=rk_public_xxxxxxxxxxxxx
```

3. **Salve o arquivo**

4. **Reinicie o servidor Next.js:**
   ```bash
   # Pressione Ctrl+C no terminal onde o dev está rodando
   # Depois execute:
   npm run dev
   # ou
   pnpm dev
   ```

---

### **Passo 6: Teste o Formulário (2 minutos)**

1. Acesse o site: http://localhost:3000
2. Role até a seção **"Fale Conosco"**
3. Preencha o formulário:
   - **Nome:** "João Silva"
   - **Email:** seu-email-pessoal@gmail.com
   - **Telefone:** (11) 99999-9999
   - **Empresa:** "Teste"
   - **Mensagem:** "Olá, testando o formulário de contato"

4. Clique em **"Enviar Mensagem"**

5. **Verifique:**
   - ✅ Deve aparecer uma animação de sucesso na tela
   - ✅ Deve chegar um email em seu servidor (Gmail, Outlook, etc)
   - ✅ O email deve conter os dados do formulário

---

## 🆘 Troubleshooting

### Problema: "Configuração de email incompleta"
**Solução:**
- Verificar se `.env.local` existe na raiz do projeto
- Verificar se as 3 variáveis estão preenchidas (sem deixar em branco)
- Reiniciar o servidor `npm run dev`
- Abrir console do navegador (F12) para ver mensagens de erro

### Problema: "Erro ao enviar email"
**Solução:**
- Verificar se o Service ID está correto
- Verificar se o Template ID está correto
- Verificar se o template usa as variáveis corretas:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{from_phone}}`
  - `{{company}}`
  - `{{message}}`

### Problema: Email não chega na caixa de entrada
**Solução:**
- Verificar pasta de SPAM/Lixo eletrônico
- Verificar se o serviço de email (Gmail, Outlook) está autorizado
- Se usar Gmail: acessar https://myaccount.google.com/security e dar permissão a "Aplicativos menos seguros"
- Aguardar 1-2 minutos (pode levar um tempo para chegar)

### Problema: "Erro de limite excedido"
**Solução:**
- EmailJS plano gratuito tem limite de 200 emails/mês
- Fazer upgrade para plano pago se necessário
- Ou aguardar reset mensal

---

## 📊 Resumo das Variáveis

| Variável | Onde Encontrar | Exemplo |
|----------|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Dashboard > Services > Seu serviço | `service_a1b2c3d4` |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Dashboard > Email Templates > Seu template | `template_x1y2z3a4` |
| `NEXT_PUBLIC_EMAILJS_USER` | Dashboard > API Keys > Public Key | `rk_public_xxxxx` |

---

## 🔒 Segurança

- ✅ `.env.local` está no `.gitignore` (não será commitado)
- ✅ Apenas chaves públicas estão expostas no navegador (seguro)
- ✅ Não commitir `.env.local` no Git
- ✅ Cada máquina deve ter seu próprio `.env.local`

---

## 📧 Template EmailJS Sugerido

Se quiser um template mais bonito com HTML formatado, use este:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 20px auto; background: white; padding: 30px; border-radius: 8px; }
        .header { color: #0080C1; border-bottom: 2px solid #0080C1; padding-bottom: 15px; margin-bottom: 20px; }
        .info { margin: 15px 0; }
        .label { font-weight: bold; color: #333; }
        .value { color: #666; margin-left: 10px; }
        .message-box { background: #f9f9f9; padding: 15px; border-left: 4px solid #F58634; margin: 20px 0; }
        .footer { color: #999; font-size: 12px; margin-top: 20px; border-top: 1px solid #e0e0e0; padding-top: 15px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Nova Mensagem de Contato</h2>
        </div>
        
        <div class="info">
            <span class="label">Nome:</span>
            <span class="value">{{from_name}}</span>
        </div>
        
        <div class="info">
            <span class="label">Email:</span>
            <span class="value">{{from_email}}</span>
        </div>
        
        <div class="info">
            <span class="label">Telefone:</span>
            <span class="value">{{from_phone}}</span>
        </div>
        
        <div class="info">
            <span class="label">Empresa:</span>
            <span class="value">{{company}}</span>
        </div>
        
        <div class="message-box">
            <span class="label">Mensagem:</span>
            <p>{{message}}</p>
        </div>
        
        <div class="footer">
            <p>Mensagem enviada via formulário de contato em www.iseecodes.com.br</p>
        </div>
    </div>
</body>
</html>
```

---

## ✅ Checklist Final

- [ ] Criei conta em EmailJS
- [ ] Copiei Public Key
- [ ] Criei Email Service (Gmail/Outlook/SMTP)
- [ ] Copiei Service ID
- [ ] Criei Template "contact_form"
- [ ] Copiei Template ID
- [ ] Editei `.env.local` com os 3 valores
- [ ] Reiniciei servidor `npm run dev`
- [ ] Testei formulário
- [ ] Email chegou na caixa de entrada

---

**Pronto! Seu formulário de contato está funcionando! 🎉**

Qualquer dúvida, consulte:
- 📖 [Documentação EmailJS](https://www.emailjs.com/docs)
- 📖 [Next.js Env Variables](https://nextjs.org/docs/basic-features/environment-variables)

