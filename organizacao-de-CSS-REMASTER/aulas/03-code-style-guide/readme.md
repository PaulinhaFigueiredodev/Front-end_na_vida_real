# Code Style Guide

1. [Sintaxe](#)
1. [Declaração](#)
1. [Comentários](#)

### Sintaxe

Use soft-tabs com dois espaços:

```css
/* bom */
.btn {
        color: #000;
}

/* ruim */
.btn {
            color: #000;
}
```

Use sempre aspas duplas:

```css
/* bom */
.btn {
    background-image: url("textura.jpg");
    font-family: "Helvetica Neue", sans-serif;
}

/* ruim */
.btn {
    background-image: url('textura.jpg');
    font-family: 'Helvetica Neue', sans-serif;
}
```

Inclua um espaço antes de abrir as chaves da regra:

```css
/* bom */
.btn {
    color: #000;
}

/* ruim */
.btn{
    color: #000;
}
```

Feche as chaves em uma nova linha:

```css
/* bom */
.btn {
    color: #000;
}

/* ruim */
.btn{
    color: #000;}
```
Inclua um espaço depois do : da declaração:

```css
/* bom */
.btn {
    color: #000;
}

/* ruim */
.btn {
    color:#000;
}
```
Sempre use um ; no fim da declaração:

```css
/* bom */
.btn {
    color: #000;
}

/* ruim */
.btn {
    color: #000
}
```

Mantenha sempre uma declaração por linha:

```css
/* bom */
.nav,
.footer,
.btn {
    color: #000;
}

/* ruim */
.nav, .footer, .btn {
    color: #000;
}
```

Separe as regras por uma linha em branco:

```css
/* bom */
.btn {
    color: #000;
}

.nav-item {
    color: #000;
}

/* ruim */
.btn {
    color: #000;
}
.nav-item {
    color: #000;
}
```

Use sempre caixa baixa:

```css
/* bom */
.nav-item {
    color: #000;
}

/* ruim */
.Nav-item {
    color: #000;
}
```

Use hifens para separar os nomes:

```css
/* bom */
.nav-item {
    color: #000;
}

/* ruim */
.nav_item {
    color: #000;
}
```

Sempre que usar valores hexadecimais usar eles reduzidos:

```css
/* bom */
.nav-item {
    color: #fff;
}

/* ruim */
.nav-item {
    color: #ffffff;
}
```

Não especifique unidades quando o valor for igual a zero:


```css
/* bom */
.nav-item {
    padding: 0;
}

/* ruim */
.nav-item {
    padding: 0px;
}
```

Não use valores iniciados com zero:

```css
/* bom */
.nav-item {
    transition: color .3s;
}

/* ruim */
.nav-item {
    transition: color 0.3s;
}
```

