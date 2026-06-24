import { Item } from '../components/Item';

export const Home = () => {
    return (
        <section>
        <div className="mx-auto max-w-7xl grid grid-cols-[repeat(auto-fit,minmax(255px,1fr))] gap-8 p-8">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    )
}
