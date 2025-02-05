import {cn} from "../../lib/utils";

const ProductPrice = ({value, className}: { value: string; className?: string }) => {
    console.log("type", typeof value);
    const numericValue = Number(value);
    const stringValue = numericValue.toFixed(2);
    const [intValue, floatValue] = stringValue.split('.');

    return (
        <p className={cn('text-2xl', className)}>
            <span className='text-xs align-super'>$</span>
            {intValue}
            <span className='text-xs align-super'>.{floatValue}</span>
        </p>
        // <p className={cn("text-2xl", className)}>
        //     <span className="text-xs align-super">$</span>
        //     {intValue}
        //     <span className="text-xs align-super">{floatValue}</span>
        // </p>
    );
}

export default ProductPrice;