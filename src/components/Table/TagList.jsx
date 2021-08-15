import { Tag } from '../Tags';

function TagList({ list }) {
  return list?.map((item, index) => (
    <Tag
      mb={{ md: 1 }}
      key={index}
      mr={index === list.length - 1 ? null : 2}
      label={item}
    />
  ));
}

export default TagList;
