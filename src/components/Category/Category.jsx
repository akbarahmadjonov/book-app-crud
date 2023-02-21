import {
  CategoryLink,
  CategoryWrapper,
  Item,
  List,
  Title,
} from "./Category.style";

export const Category = () => {
  return (
    <CategoryWrapper>
      <Title>Asosiy kategoriyalar</Title>
      <List>
        <Item>
          <CategoryLink to="temuriylar">Temuriylar davri</CategoryLink>
        </Item>
        <Item>
          <CategoryLink to="jadidlar">Jadid adabiyoti</CategoryLink>
        </Item>
        <Item>
          <CategoryLink to="sovetlar">Sovet davri</CategoryLink>
        </Item>
        <Item>
          <CategoryLink to="mustaqillik">Mustaqillik davri</CategoryLink>
        </Item>
      </List>
    </CategoryWrapper>
  );
};
