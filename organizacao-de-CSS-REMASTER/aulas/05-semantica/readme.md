# Organização de CSS com Semântica

Este exemplo demonstra boas práticas na organização de HTML e CSS utilizando **semântica na nomeação de classes**, separação de responsabilidades e uso de variáveis CSS.

---

## Conceitos Aplicados
Separação entre Estilo e Comportamento

Classes iniciadas com **js-**:
```html
 <header class="float-left js-header"></header>
 <div class="js-container is-active"></div>
```
Essas classes não devem ser usadas para estilização.
Elas existem apenas para o JavaScript selecionar elementos no DOM.

- js-header
- js-container

Isso evita que mudanças visuais quebrem scripts.

## Classes de Estado

```html
 <div class="js-container is-active"></div>
```

**is-active** representa um estado do componente, e não uma variação estrutural.

Estados normalmente usam prefixos como:

- is- (estado)
- has- (possui algo)

Exemplo no CSS:
```css
.is-active {
    display: block;
}
```

## Nomeação Semântica

Semântica é nomear classes pelo significado, não pela aparência.

Errado:
```css

.red {
    color: red;
}
```

Esse nome depende da aparência.

 Melhor:
```css
.btn-default {
    color: blue;
}
```

Aqui o nome representa o papel do elemento (um botão padrão), não sua cor.