# pro-tils: a small extensions package which also supported typescript

This package extends global Javascript interfaces with additional utility methods.

**Notes:**

**This will not replace the existing methods, just to create new utility functions attached into prototypes**

Please raise an issue, or submit a pull request yourself if you see any overlap.

# Why

All of this is just to create utility functions which are usually used in projects, also provide a usage of chaining functions efficiently.
Chaining functions can indeed reduce the need for intermediate variable declarations, leading to more concise and readable code.

Let consider below example, we had an object which is like

```typescript
type User = {
  id: number;
  name: string;
  phone: number;
  address?: {
    street?: string;
    ward?: string;
    city?: string;
  };
};
```

As the Front-end logic, you want to translate the city with its value. It's normally to write

```tsx
const user: User = { ...userValue };
const city = user.address?.city;
const cityTranslation = city && translator(city);
{ ...rest }

<p>{cityTranslation}</p>

```

Right now it is just simply:

```tsx
<p>{user.getDeep('address.city').exist((cityValue) => translator(city))}</p>
```

## Documents

Check out [this documentation](https://cashelng.github.io/pro-tils/) for installation and usage

## Contributing

Contributions are welcome! Please feel free to fork the repository, make improvements, and submit pull requests.

## License

This project is licensed under the MIT License
