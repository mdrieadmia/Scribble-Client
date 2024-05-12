import PropTypes from 'prop-types';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
const FeaturedTable = ({ featured }) => {

    /*
     * 
     * 
     * 
     */

    const table = useReactTable({})
    console.log(featured);
    return (
        <div>
            <h1>Basic Table : {featured.length}</h1>
        </div>
    );
};

FeaturedTable.propTypes = {
    featured: PropTypes.object
};

export default FeaturedTable;