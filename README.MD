#### Legenda de Prioridades:

- **P0 (Prioridade Crítica):** Requer atenção imediata.
- **P1 (Prioridade Alta):** Importante, deve ser tratado logo após P0.
- **P2 (Prioridade Média):** Importante, mas menos urgente.
- **P3 (Prioridade Baixa):** Baixa prioridade, pode ser tratado posteriormente.

## Casos de Teste

### Caso de Teste 1: Verificar Elementos da Interface

**Descrição:** Validar a visibilidade e consistência dos elementos na página de login do OrangeHRM.

**Prioridade:** P1 | **Status:** Concluido | **Executor:** Jason Willyan

**Data de criação:** 04/12/23 | **Ambiente:** Produção | **Plataforma:** Desktop - Phone

#### Subtestes:

1. **Visibilidade dos Logos:** Garantir que todos os logos estejam visíveis.

2. **Título da Página:** Confirmar se o título da página é "OrangeHRM".

3. **Título Modal de Login:** Assegurar que o título modal de login seja "Login".

4. **Visibilidade do Título:** Confirmar que o título seja visível na página.

5. **Placeholders dos Campos de Login:** Confirmar que os placeholders dos campos de usuário e senha sejam "Username" e "Password", respectivamente.

#### Nota:
Este caso de teste deve ser executado em diferentes ambientes (produção), validando a integridade e consistência de vários elementos na página de login do OrangeHRM.

### Caso de Teste 2: Validar Links e Redirecionamentos

**Descrição:** Verificar a funcionalidade dos links e redirecionamentos na página de login do OrangeHRM.

**Prioridade:** P1 | **Status:** Concluido | **Executor:** Jason Willyan

**Data de criação:** 04/12/23 | **Ambiente:** Produção | **Plataforma:** Desktop - Phone

#### Subtestes:

1. **Validar Links Externos:** Verificar se os links externos (LinkedIn, Facebook, Twitter, YouTube) na página de login do OrangeHRM estão acessíveis.

2. **Validar Redirecionamento ao Clicar em "Forgot Password" Link:** Garantir que ao clicar no link "Forgot Password", a página seja redirecionada para "/requestPasswordResetCode" e possa voltar corretamente.

3. **Validar Redirecionamento ao Clicar no Link "OrangeHRM"** Verificar se ao clicar no link "OrangeHRM", a URL após o redirecionamento corresponde ao esperado após ajustes.

#### Nota:
Este caso de teste deve ser executado em diferentes ambientes (produção), validando a integridade e consistência de vários elementos na página de login do OrangeHRM.

### Caso de Teste 3: Validar Funcionalidade de Login

**Descrição:** Verificar a funcionalidade de login no OrangeHRM.

**Prioridade:** P0 | **Status:** Concluído | **Executor:** Jason Willyan

**Data de criação:** 04/12/23 | **Ambiente:** Produção | **Plataforma:** Desktop - Phone

#### Subtestes:

1. **Login Bem-sucedido:** Validar o login bem-sucedido com credenciais válidas.
   - **Passos:**
     1. Preencher usuário e senha.
     2. Clicar no botão de login.
   - **Expectativas:**
     - A URL deve conter "/dashboard/index".
     - Os logos devem estar visíveis.
     - O título da página deve ser "OrangeHRM".
     - O título do modal de login deve ser "Login".
     - O título da página deve ser visível.
     - Os placeholders dos campos de login devem ser "Username" e "Password".

2. **Login com Senha Incorreta:** Validar o login com senha incorreta.
   - **Passos:**
     1. Preencher usuário com credenciais válidas e senha incorreta.
     2. Clicar no botão de login.
   - **Expectativas:**
     - Um alerta de erro deve ser visível.
     - A mensagem do alerta deve ser "Invalid credentials".

3. **Login sem Senha:** Validar o login sem fornecer senha.
   - **Passos:**
     1. Preencher usuário com credenciais válidas e deixar o campo de senha em branco.
     2. Clicar no botão de login.
   - **Expectativas:**
     - Um alerta de erro deve ser visível.
     - A mensagem do alerta deve conter "Required".

4. **Login com Usuário Incorreto:** Validar o login com usuário incorreto.
   - **Passos:**
     1. Preencher usuário com um nome de usuário inválido e senha válida.
     2. Clicar no botão de login.
   - **Expectativas:**
     - Um alerta de erro deve ser visível.
     - A mensagem do alerta deve ser "Invalid credentials".

5. **Login sem Usuário:** Validar o login sem fornecer usuário.
   - **Passos:**
     1. Deixar ambos os campos de usuário e senha em branco.
     2. Clicar no botão de login.
   - **Expectativas:**
     - Dois alertas de erro devem ser visíveis.
     - As mensagens dos alertas devem conter "Required".

6. **Login sem Usuário e Senha:** Validar o login sem fornecer usuário e senha.
   - **Passos:**
     1. Deixar ambos os campos de usuário e senha em branco.
     2. Clicar no botão de login.
   - **Expectativas:**
     - Dois alertas de erro devem ser visíveis.
     - As mensagens dos alertas devem conter "Required" nos dois campos.

### Nota:
Este conjunto de testes deve ser executado em diferentes ambientes de produção para validar a integridade e consistência da página de login do OrangeHRM.
