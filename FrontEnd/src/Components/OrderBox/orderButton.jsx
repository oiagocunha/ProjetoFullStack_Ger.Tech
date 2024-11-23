import styles from './orderButton.module.css';

function OrderButton() {
  return (
    <div className={styles.botãoDeOrdenar}>
      <label htmlFor="choseRelevance">Ordenar por:</label>
      <select name="products" id="choseRelevance">
        <option value="relevance">Mais relevantes</option>
        <option value="recent">Mais recentes</option>
        <option value="oldest">Mais antigos</option>
      </select>
    </div>
  );
}

export default OrderButton;