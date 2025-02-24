/* eslint-disable react/prop-types */
const Notification = ({ notification }) => {
    const baseStyle = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    };

    const personAddedStyle = {
        ...baseStyle,
        color: 'green',
    };

    const personRemovedStyle = {
        ...baseStyle,
        color: 'red',
    };



    if (notification.text === null) {
        return null
    }

    if (notification.type === 'add') {
        return (
            <div style={personAddedStyle}
                className='notification'>
                {notification.text}
            </div>
        )
    }

    if (notification.type === 'remove') {
        return (
            <div style={personRemovedStyle}
                className='notification'>
                {notification.text}
            </div>
        )
    }
    return (
        <div style={personRemovedStyle}
            className='notification'>
            {'something went wrong'}
        </div>
    )


}
export default Notification