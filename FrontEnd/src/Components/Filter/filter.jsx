import styles from './filter.module.css'

function FiltroDosProdutos() {
  return(
    <>
      

      <div className={styles.container}>
        <div className={styles.filtro}>
          <h2>Filtrar por:</h2>
          <div className={styles.filterOptions}>
            
            <div>
              <h3 className={styles.categoria}> Marca</h3>
              <input type="checkbox" id="Adidas" name="Adidas" />
              <label for="Adidas">Adidas</label>
            </div>

            <div>
              <input type="checkbox" id="Calenciaga" name="Calenciaga" />
              <label for="Calenciaga">Calenciaga</label>
            </div>

            <div>
              <input type="checkbox" id="K-Swiss" name="K-Swiss" />
              <label for="K-Swiss">K-Swiss</label>
            </div>

            <div>
              <input type="checkbox" id="Nike" name="Nike" />
              <label for="Nike">Nike</label>
            </div>

            <div>
              <input type="checkbox" id="Puma" name="Puma" />
              <label for="Puma">Puma</label>
            </div>

            <div>
              <h3 className={styles.categoria}> Categoria</h3>
              <input type="checkbox" id="Esporte e lazer" name="Esporte e lazer" />
              <label for="Esporte e lazer">Esporte e lazer</label>
            </div>

            <div>
              <input type="checkbox" id="Casual" name="Casual" />
              <label for="Casual">Casual</label>
            </div>

            <div>
              <input type="checkbox" id="Utilitário" name="Utilitário" />
              <label for="Utilitário">Utilitário</label>
            </div>

            <div>
              <input type="checkbox" id="Corrida" name="Corrida" />
              <label for="Corrida">Corrida</label>
            </div>

            <div>
              <h3 className={styles.categoria}> Gênero</h3>
              <input type="checkbox" id="Masculino" name="Masculino" />
              <label for="Masculino">Masculino</label>
            </div>

            <div>
              <input type="checkbox" id="Feminino" name="Feminino" />
              <label for="Feminino">Feminino</label>
            </div>

            <div>
              <input type="checkbox" id="Unisex" name="Unisex" />
              <label for="Unisex">Unisex</label>
            </div>

            <div>
              <h3 className={styles.categoria}>Estado</h3>
              <input type="radio" name="opcao" value="opcao1"  />
              <label for="Novo">Novo</label>
            </div>

            <div>
              <input type="radio" name="opcao" value="opcao2" />
              <label for="Usado">Usado</label>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default FiltroDosProdutos;