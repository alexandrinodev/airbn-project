# Prettier (Tailwind) — ajuste de indentação

## Sintoma: “ao salvar o Prettier coloca 2 espaços”

Isso é controlado pela configuração do `.prettierrc`.

- `tabWidth`: quantidade de espaços por nível de indentação
- `useTabs`: se usa `\t` (tabs) ou espaços

## Arquivo atual

Abra: `front-end/.prettierrc`

Atualmente está com:

- `tabWidth: 4`
- `useTabs: false`

Se você quer **2 espaços**, ajuste para:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tabWidth": 2,
  "useTabs": false
}
```

## VSCode “brigando” com outro formatter

Se ao salvar continuar diferente do esperado:

1. VSCode → Command Palette → **Format Document With…**
2. Selecione **Prettier - Code formatter**
3. Confirme que **Default Formatter** no workspace está em Prettier

Em muitos casos o problema vem de outro formatter (ex: ESLint) formatando antes/depois do Prettier.
