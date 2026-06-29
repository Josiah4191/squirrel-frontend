import './SelectionInput.css'

export default function SelectionInput({ariaLabel, selectedValue, setSelectedValue, options}) {
    return (
            <select
                className="selection-input"
                aria-label={ariaLabel}
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}>

                {options.map((name) => (
                    <option key={name} value={name}>
                        {name}
                    </option>
                ))}
            </select>
    )
}