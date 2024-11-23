import styles from './filter.module.css';

function FiltroDosProdutos() {
  return (
    <div className={styles.container}>
      <div className={styles.filtro}>
        <h2>Filtrar por:</h2>
        <div className={styles.filterOptions}>
          <div>
            <h3 className={styles.categoria}>Marca</h3>
            <input type="checkbox" id="Adidas" name="Adidas" />
            <label htmlFor="Adidas">Adidas</label>
          </div>

          <div>
            <input type="checkbox" id="Calenciaga" name="Calenciaga" />
            <label htmlFor="Calenciaga">Calenciaga</label>
          </div>

          <div>
            <input type="checkbox" id="K-Swiss" name="K-Swiss" />
            <label htmlFor="K-Swiss">K-Swiss</label>
          </div>

          <div>
            <input type="checkbox" id="Nike" name="Nike" />
            <label htmlFor="Nike">Nike</label>
          </div>

          <div>
            <input type="checkbox" id="Puma" name="Puma" />
            <label htmlFor="Puma">Puma</label>
          </div>

          <div>
            <h3 className={styles.categoria}>Categoria</h3>
            <input type="checkbox" id="Esporte e lazer" name="Esporte e lazer" />
            <label htmlFor="Esporte e lazer">Esporte e lazer</label>
          </div>

          <div>
            <input type="checkbox" id="Casual" name="Casual" />
            <label htmlFor="Casual">Casual</label>
          </div>

          <div>
            <input type="checkbox" id="Utilitário" name="Utilitário" />
            <label htmlFor="Utilitário">Utilitário</label>
          </div>

          <div>
            <input type="checkbox" id="Corrida" name="Corrida" />
            <label htmlFor="Corrida">Corrida</label>
          </div>

          <div>
            <h3 className={styles.categoria}>Gênero</h3>
            <input type="checkbox" id="Masculino" name="Masculino" />
            <label htmlFor="Masculino">Masculino</label>
          </div>

          <div>
            <input type="checkbox" id="Feminino" name="Feminino" />
            <label htmlFor="Feminino">Feminino</label>
          </div>

          <div>
            <input type="checkbox" id="Unisex" name="Unisex" />
            <label htmlFor="Unisex">Unisex</label>
          </div>

          <div>
            <h3 className={styles.categoria}>Estado</h3>
            <input type="radio" name="opcao" value="opcao1" />
            <label htmlFor="Novo">Novo</label>
          </div>

          <div>
            <input type="radio" name="opcao" value="opcao2" />
            <label htmlFor="Usado">Usado</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltroDosProdutos;