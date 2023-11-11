function CoreConcept({ img, title, description, isSelected }) {
  return (
    <li className={isSelected ? 'active' : ''}>
      <img src={img} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
