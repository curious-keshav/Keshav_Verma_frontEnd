import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import "./List.css"
// Single List Item
const WrappedSingleListItem = ({ index, isSelected, text, currBtn, onClickHandler, selectedItems }) => {
    if (currBtn === 'single') {   //Single Selection Mode
        return (
            <>
                <li
                    style={{ backgroundColor: isSelected ? "green" : "red", letterSpacing: '0.8', border: '2px solid black', listStyleType: 'none', margin: '5px', height: '35px', textAlign: 'center', fontWeight: 700, cursor: 'pointer' }}
                    onClick={() => onClickHandler(index)} // Checking if the item is selected , we need to set the background to green
                >
                    {text}
                </li>
            </>
        );
    }
    else if (currBtn === 'multiple') {    //Multiple Selection Mode
        return (
            <>
                <li
                    style={{ backgroundColor: selectedItems.includes(index) ? "green" : "red", letterSpacing: '0.8', border: '2px solid black', listStyleType: 'none', margin: '5px', height: '35px', textAlign: 'center', fontWeight: 700, cursor: 'pointer' }}
                    onClick={() => onClickHandler(index)} //Checking if the item is present in selectedItems list , if it is present we need to set the background to red
                >
                    {text}
                </li>
            </>
        );
    }
    else {     //Clear Selection Mode
        return (
            <>
                <li
                    style={{ backgroundColor: "red", letterSpacing: '0.8', border: '2px solid black', margin: '5px', height: '35px', textAlign: 'center', listStyleType: 'none', fontWeight: 700, cursor: 'pointer' }}
                    onClick={() => onClickHandler(index)} // This puts all the item's background to red since every thing is deselected
                >
                    {text}
                </li>
            </>
        );
    }
};


WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired,
    selectedItems:PropTypes.array,
    text: PropTypes.string.isRequired
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }, props) => {
    const [setSelectedIndex, selectedIndex] = useState(); //list of selected Items when multiple selection mode is on


    const [currBtn, setcurrBtn] = useState('single');

    // single, multiple, clear button

    const onClickSingle = () => { //changes the mode to single selection
        setcurrBtn('single');
        console.log("single");

    }
    const onClickMultiple = () => { // changes the mode to multiple selection
        setcurrBtn('multiple');
        console.log("multiple");
    }
    const onClickClear = () => { // changes the mode to clear selection
        setcurrBtn('clear');
        setSelectedItems([]); // clearing the selectedItems list
        selectedIndex(null);
        console.log(props);
    }


    //declaring an array use state
    const [selectedItems, setSelectedItems] = useState([]);
    const handleItemSelect = (itemId) => {
        if (selectedItems.includes(itemId) && currBtn==='multiple') {
            setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else if(currBtn==='multiple'){
            setSelectedItems([...selectedItems, itemId]);
        }
    }

    const handleClick = (index) => {
        console.log(index);
        handleItemSelect(index);
        setSelectedIndex === index ? selectedIndex(null) : selectedIndex(index);
        console.log(setSelectedIndex);
    };

    return (<>

        <ul style={{ textAlign: "left", marginTop: '40px' }}>
            {items.map((item, index) => (
                <SingleListItem
                    key={index}        //added
                    text={item.text}    //added
                    index={index}
                    isSelected={setSelectedIndex === index}   //added
                    currBtn={currBtn}              //added
                    selectedItems={selectedItems}       //added
                    onClickHandler={() => handleClick(index)}
                />
            ))}
        </ul>
        <div className="container" style={{
            margin: 'auto',
            width: '20%',
            marginRight: 'auto',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between'
        }}>

            <button type="button" onClick={onClickSingle} class="btn btn-success mx-2">Single</button>
            <button type="button" onClick={onClickMultiple} class="btn btn-danger mx-2">Multiple</button>
            <button type="button" onClick={onClickClear} class="btn btn-warning mx-2">Clear</button>
        </div>
        <div className="cont">
            <div class="container2 my-3">
                <ul class="bullet-point">
                    <h5>Tips:</h5>
                    <li>For Answers you can refer to "Answers" section</li>
                    <li>Enable the Dark Mode of this website.</li>
                </ul>
                <hr></hr>
                <div className="selfInfo"><ul class="bullet-point">
                    <h5>Keshav Verma || LPU || 12011798</h5>

                </ul>
                </div>
            </div>
            <div class="container2 my-3">
                <ul class="bullet-point">
                    <h5>Instructions:</h5>
                    <li>Click the "Single" button to select a single element.</li>
                    <li>Click the "Multiple" button to select multiple options.</li>
                    <li>Click the "Clear" button to unselect your selection.</li>
                    <li>Click on selected element to unselect it.</li>
                </ul>
            </div>
        </div>
    </>
    );
};

WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired
        })
    )
};

WrappedListComponent.defaultProps = {
    items: [
        {
          text: "The Colosseum, Rome, Italy"
        },
        {
          text: "The Great Wall of China",
        },
        {
          text: "The Taj Mahal, India",
        },
        {
          text: "Christ the Redeemer, Brazil",
        },
        {
          text: "Machu Picchu, Peru",
        },
        {
          text: "Chichén Itzá, Mexico",
        },
        {
          text: "Petra, Jordan",
        },
      ]
};

const List = memo(WrappedListComponent);

export default List;