import React, { useState, useEffect } from 'react'

function Answer(props) {
    const [myStyle, setmyStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'black',
            border: '7px solid #1c385e',
            padding: '12px'
        })

    const [myStyle2, setmyStyle2] = useState(
        {
            color: 'white',
            backgroundColor: '#212529',
            padding: '12px'

        })

    const [myStyle3, setmyStyle3] = useState(
        {
            color: 'white',
            backgroundColor: 'blue',
            padding: '12px'

        })



    // const [btntext,setBtnText] = useState("Enable Dark Mode");
    const btntext = props.mode;

    useEffect(() => {
        setTimeout(() => {
            toggleStyle();
        }, 1);
    });
    let toggleStyle = () => {
        console.log(props.mode)
        if (props.mode === 'light') {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '7px solid #1c385e',
                padding: '12px',
            })
            setmyStyle2({
                color: 'white',
                backgroundColor: '#212529',
                padding: '12px'
            })
            setmyStyle3({
                color: 'black',
                backgroundColor: 'white',
                padding: '12px'
            })
            console.log("Dark mode disabled");

        } else {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '7px solid #1c385e',
                padding: '12px'
            })
            setmyStyle2({
                color: 'white',
                backgroundColor: '#212529',
                padding: '12px'
            })
            setmyStyle3({
                color: 'white',
                backgroundColor: 'blue',
                padding: '12px'
            })
            console.log("Dark mode enabled");
        }
    }



    return (
        <>
            <div className='container my-3' style={myStyle}>
                <h2 className='my-3 text-center'>Answers</h2>
                <div><div class="accordion" id="accordionExample" >
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" style={myStyle2} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                A) Explain what the simple List component does.
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={myStyle3}>
                                The provided code is a React component called "List" that displays a list of items with selectable options. It consists of two sub-components, "WrappedSingleListItem" and "WrappedListComponent". The "WrappedSingleListItem" component is a memoized functional component that represents a single item in the list. It takes four arguments: "index", "isSelected", "onClickHandler", and "text", and renders a list item element with a background color based on the selection status. The "WrappedListComponent" is also a memoized functional component that generates a list of items by utilizing the "WrappedSingleListItem" component. It takes an array of objects with "text" and "key" attributes as the "items" parameter. The component uses the "useState" and "useEffect" hooks to keep track of the index of the currently selected item.
                                The List component iterates over an array of items and renders a SingleListItem component for each item. It passes relevant props to the SingleListItem component to handle the display and behavior of each item. The List component also manages the state of the selected index using the useState hook, which allows it to keep track of the currently selected item in the list. User clicks are handled through the handleClick function, which updates the selected index based on the user's actions. This way, the List component provides a dynamic and interactive list of selectable items for users to interact with on the website.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={myStyle2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                B) What problems / warnings are there with code?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={myStyle3}>
                                <div>
                                    <h3>Error Corrections</h3>
                                    <h4>Error 1:</h4>
                                    <p>The error "Invalid prop 'isSelected' of type string supplied to WrappedSingleListItem, expected boolean" occurs because the propType of 'isSelected' has been set as boolean, but it is being assigned a value of string type, resulting in a type mismatch.</p>
                                    <pre>
                                        <code>
                                            {`const handleClick = (index) => {
        console.log(index);
        handleItemSelect(index);
        setSelectedIndex === index ? selectedIndex(null) : selectedIndex(index);
        console.log(setSelectedIndex);
    };`}
                                        </code>
                                    </pre>
                                    

                                    <h4>Error 2:</h4>
                                    <p>There was an error in declaring the selectedIndex variable. The error was related to the usage of useEffect hook, which complained about a missing dependency, specifically setSelectedIndex.</p>
                                    <pre>
                                        <code>
                                            {`const [setSelectedIndex, selectedIndex] = useState();`}
                                        </code>
                                    </pre>

                                    <h4>Error 3:</h4>
                                    <p>Since the map() method was called without proper data being passed from the App component, the selectedIndex variable was set to null by default, resulting in an error. To address this, a default prop for data can be set to ensure that the map() method has valid data to work with, even if it is not passed from the App component.



</p>
                                    <pre>
                                        <code>
                                            {`WrappedListComponent.defaultProps = {
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
};`}
                                        </code>
                                    </pre>

                                    <h4>Error 4:</h4>
                                    <p>There are issues with PropTypes usage in the code, specifically the incorrect use of "shapeOf" instead of "shape" to define the shape of an object prop. However, "arrayOf" is being used correctly to specify an array prop. It's crucial to rectify the usage of "shapeOf" to "shape" to ensure proper validation of PropTypes in the component.</p>
                                    <pre>
                                        <code>
                                            {`WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired
        })
    )
};`}
                                        </code>
                                    </pre>
                                    

                                    <h4>Error 5:</h4>
                                    <p>The function "onClickHandler" is being invoked as a regular function, causing the rendered color to always be green as it takes the initial value of the passed index. To correct this behavior, "onClickHandler" should be called as an arrow function to ensure it receives the updated value of the index.</p>
                                    <pre>
                                        <code>
                                            {`onClick={()=>onClickHandler(index)}`}
                                        </code>
                                    </pre>
                                    <h4>Error 6:</h4>
                                    <p>When using React to map through an array and generate a list of elements, it's important to assign a unique key prop to each item. In the WrappedListComponent, make sure to add a key prop to the SingleListItem component to ensure proper rendering and performance optimization.</p>
                                    <pre>
                                        <code>
                                            {`<SingleListItem
    key={index}        //added
    text={item.text}    //added
    index={index}
    isSelected={setSelectedIndex === index}   //added
    currBtn={currBtn}              //added
    selectedItems={selectedItems}       //added
    onClickHandler={() => handleClick(index)}
/>`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={myStyle2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                C) Please fix, optimize, and/or modify the component as much as you think is necessary.
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={myStyle3}>
                            <pre>
                                        <code>
                                            {`import React, { useState, memo } from "react";
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

export default List;`}
                                        </code>
                                    </pre>
                            </div>
                        </div>
                    </div>
                </div></div>
            </div>

        </>
    )
}

export default Answer