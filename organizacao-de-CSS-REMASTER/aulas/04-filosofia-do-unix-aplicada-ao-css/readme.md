# Filosofia do Unix Aplicada ao CSS

A Filosofia do Unix segue um princípio simples e poderoso:

> "Faça uma coisa e faça bem feito."

Quando aplicamos esse conceito ao CSS, buscamos criar estilos **modulares, reutilizáveis e com responsabilidade única**, evitando dependências desnecessárias e alto acoplamento entre elementos.

---

## Exemplo Acoplado (Baixa Reutilização)

Neste modelo, os estilos estão diretamente ligados à estrutura do formulário.  
Os elementos `input` e `label` dependem do contexto `.form`.

```css
.form {

}

.form input {
    
}

.form label {
    
}
```

## Exemplo com Princípio da Responsabilidade Única

Aqui aplicamos o conceito de Single Responsibility, onde cada classe possui uma única responsabilidade.

```css

.form {

}

.input {
    
}

.label {
    
}
```

## Nesse modelo temos:

- Classes independentes

- Maior reutilização

- Menor acoplamento

- Código mais escalável

- Manutenção simplificada

- Melhor organização do CSS