import { CModal } from "./Modal"

export function Cuerpo() {
    return (
        <>
        <main>
            <div class="container-fluid">
                <table class="table">
                    <thead>
                        <tr>
                            <th>MES</th>
                            <th>AÑO</th>
                            <th>Salario</th>
                            <th>Nomina</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Enero</td>
                            <td>2023</td>
                            <td>1.000€</td>
                            <td><i class="fa-solid fa-file-pdf"></i></td>
                        </tr>
                    </tbody>
                </table>
                <CModal></CModal>
            </div>
        </main>
        </>
    )
}

export default Cuerpo