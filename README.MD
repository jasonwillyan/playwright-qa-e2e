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
