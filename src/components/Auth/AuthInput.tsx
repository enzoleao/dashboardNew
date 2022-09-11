interface AuthInputProps{
    label: string
    valor:any
    obg?:boolean
    notRenderiz?: boolean
    tipo?:'text' | 'email' | 'password'
    valorChange: (newValor: any) => void
}
export default function AuthInput (props: AuthInputProps){
    return props.notRenderiz? null : (
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input  
            type={props.tipo ?? 'text'} 
            value={props.valor} 
            onChange={e=> props.valorChange?.(e.target.value)}
            required={props.obg}
            className={`
                px-4 py-3 rounded-lg bg-gray-200 mt-2
                border focus:border-blue-500 focus:bg-white
                focus:outline-none
            `}
            />
        </div>
    )
}