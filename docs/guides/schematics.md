[comment]: # (@label Schematics)
[comment]: # (@link guides/schematics)

O PO contém *schematics* do [Angular CLI](https://angular.io/cli) em seu pacote, para facilitar o desenvolvimento de aplicações PO.

## Instalando

Um vez que for instalado o pacotes, teremos disponível os *schematics* através do Angular CLI.

### PO UI Components

Caso esteja iniciando uma aplicação com PO, indica-se utilizar o comando abaixo,
no qual será instalado o pacote `@po-ui/ng-components` e realizadas algumas configurações, que serão descritas em seguida:

```
ng add @po-ui/ng-components
```

- Substitui o `AppComponent` com uma estrutura incial de um projeto, utilizando os components `po-page-default`, `po-toolbar`, e `po-menu`;
- Importa o módulo do PO;
- Configura o tema do PO no projeto;

### PO UI Templates

Para a utilização de componentes de template o processo para inclusão é semelhante.
Primeiramente, deve-se utilizar o comando abaixo, no qual será instalado o pacote `@po-ui/ng-templates`:

```
ng add @po-ui/ng-templates
```

- Importa o módulo do PO;
- Configura o tema do PO no projeto caso não possua;

## Generate Schematics 

O `PO` vem com vários `schematics` que podem ser usados ​​para gerar componentes facilmente.

Para gerar o componente, execute o comando abaixo, onde `package` é o pacote e ```schematic-name``` o componente que deseja:

```
ng generate <package>:<schematic-name>
```

> A lista de opções disponíveis que o CLI oferece para o *ng generate* é vista acrescentando `--help` no comando.

### PO UI Components

```
ng generate @po-ui/ng-components:<schematic-name>
```

<div class="po-row">
  <div class="po-sm-12">
    <table class="po-table">
      <thead>
        <tr class="po-table-header">
          <th class="po-table-header-ellipsis">Nome</th>
          <th class="po-table-header-ellipsis">Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr class="po-table-row">
          <td class="po-table-column"> [**po-page-list**](https://po-ui.io/documentation/po-page-list)
          </td>
          <td class="po-table-column">
            Componente que deve ser utilizado como o container principal para as telas de listagem de dados, podendo ser apresentado como lista ou tabela.
          </td>
        </tr>
        <tr class="po-table-row">
          <td class="po-table-column">
          [**po-page-default**](https://po-ui.io/documentation/po-page-default)
          </td>
          <td class="po-table-column">Componente que deve ser utilizado como o container principal para as telas sem um template definido.</td>
        </tr>
        <tr class="po-table-row">
          <td class="po-table-column">[**po-page-edit**](https://po-ui.io/documentation/po-page-edit)</td>
          <td class="po-table-column">Componente que deve ser utilizado como container principal para tela de edição ou adição de um registro.</td>
        </tr>
        <tr class="po-table-row">
          <td class="po-table-column">[**po-page-detail**](https://po-ui.io/documentation/po-page-detail)</td>
          <td class="po-table-column">Componente que deve ser utilizado como container principal para a tela de detalhamento de um registro.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

### Po UI Templates
```
ng generate @po-ui/ng-templates:<schematic-name>
```

<div class="po-row">
  <div class="po-sm-12">
    <table class="po-table">
      <thead>
        <tr class="po-table-header">
          <th class="po-table-header-ellipsis">Nome</th>
          <th class="po-table-header-ellipsis">Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr class="po-table-row">
          <td class="po-table-column"> [**po-page-dynamic-table**](https://po-ui.io/documentation/po-page-dynamic-table)
          </td>
          <td class="po-table-column">Página que exibe uma lista de registros em uma tabela baseado em uma lista de fields, o mesmo também suporta metadados conforme especificado na documentação.
          </td>
        </tr>
        <tr class="po-table-row">
          <td class="po-table-column">
          [**po-page-dynamic-detail**](https://po-ui.io/documentation/po-page-dynamic-detail)
          </td>
          <td class="po-table-column">Página que serve para exibir registros em detalhes, o mesmo também suporta metadados conforme especificado na documentação.
          </td>
        </tr>
        <tr class="po-table-row">
          <td class="po-table-column">[**po-page-dynamic-edit**](https://po-ui.io/documentation/po-page-dynamic-edit)</td>
          <td class="po-table-column">Página que pode servir para editar ou criar novos registros, o mesmo também suporta metadados conforme especificado na documentação.
          </td>
        </tr>
        <tr class="po-table-row">
          <td class="po-table-column">[**po-page-dynamic-search**](https://po-ui.io/documentation/po-page-dynamic-search)</td>
          <td class="po-table-column">Componente com as ações de pesquisa já definidas, bastando que o desenvolvedor implemente apenas a chamada para as APIs e exiba as informações.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
