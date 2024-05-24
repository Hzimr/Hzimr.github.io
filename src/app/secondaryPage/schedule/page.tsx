import { BackButton } from '@/components/back-button'
import { TitlePage } from '@/components/title-page'

export default function Schedule() {
  return (
    <div className="relative mt-7 flex flex-1 flex-col items-center justify-center bg-slate-100 dark:bg-primary-darkContent">
      <TitlePage title="Schedule in construction..." />
      <table className="flex flex-col gap-4 border border-slate-900 dark:border-slate-300">
        <tr className="flex flex-1 items-center justify-center gap-2 border">
          <td>
            <th className="border">Segunda</th>
            <tr>
              <tr className="border">08:00 - 10:00</tr>
              <tr className="border">10:00 - 12:00</tr>
              <tr className="border">12:00 - 14:00</tr>
              <tr className="border">14:00 - 16:00</tr>
              <tr className="border">16:00 - 18:00</tr>
              <tr className="border">18:00 - 20:00</tr>
            </tr>
          </td>
          <td>
            <th className="border">Terça</th>
            <tr>
              <tr className="border">08:00 - 10:00</tr>
              <tr className="border">10:00 - 12:00</tr>
              <tr className="border">12:00 - 14:00</tr>
              <tr className="border">14:00 - 16:00</tr>
              <tr className="border">16:00 - 18:00</tr>
              <tr className="border">18:00 - 20:00</tr>
            </tr>
          </td>
          <td>
            <th className="border">Quarta</th>
            <tr>
              <tr className="border">08:00 - 10:00</tr>
              <tr className="border">10:00 - 12:00</tr>
              <tr className="border">12:00 - 14:00</tr>
              <tr className="border">14:00 - 16:00</tr>
              <tr className="border">16:00 - 18:00</tr>
              <tr className="border">18:00 - 20:00</tr>
            </tr>
          </td>
          <td>
            <th className="border">Quinta</th>
            <tr>
              <tr className="border">08:00 - 10:00</tr>
              <tr className="border">10:00 - 12:00</tr>
              <tr className="border">12:00 - 14:00</tr>
              <tr className="border">14:00 - 16:00</tr>
              <tr className="border">16:00 - 18:00</tr>
              <tr className="border">18:00 - 20:00</tr>
            </tr>
          </td>
          <td>
            <th className="border">Sexta</th>
            <tr>
              <tr className="border">08:00 - 10:00</tr>
              <tr className="border">10:00 - 12:00</tr>
              <tr className="border">12:00 - 14:00</tr>
              <tr className="border">14:00 - 16:00</tr>
              <tr className="border">16:00 - 18:00</tr>
              <tr className="border">18:00 - 20:00</tr>
            </tr>
          </td>
        </tr>
        <tfoot className="flex items-center justify-center p-4">
          <tr>Caso queira conversar sobre os horários entrar em contato</tr>
        </tfoot>
      </table>
      <BackButton navigate="/" />
    </div>
  )
}
