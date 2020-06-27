/*  //# HOC - Higher Order Components
    # A component that renders another component
    # (Adds a way to add things to a component without having to completely write it from scratch)
    #    USED to REUSE CODE
    #  Render Hijacking
    #  Prop manipulation
    # Abstract State

    # REACT SHORTHAND ( TRUETHY ) =====================
    # IF VALUE  IS TRUE(?) (DO THIS) IF FALSE(:) (DO THIS)
    # { value ? (rules):(rules)}


*/
console.log('   =============================');
console.log('   HOC - HIGHER ORDER COMPONENTS');
console.log('   =============================');

//# IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';

//# Rendered Component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

//# Regular function called with the component you want to wrap
const withAdminWarning = (WrappedComponent) => {

    //# HOC => Higher Ordered Component =======>
        //# ...props ==> passes down every key valued pair as props to the child = "These are the details"
    return (props) => (
        <div>
            {/* CHECK isAdmin prop, if true render <p> */}
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
    //# HOC END <=========
};

//! CHALLENGE CREATE A HOC
//! requireAuthentication
const requireAuthentication = ( WrappedComponent ) => {
    return (props) => (
        <div>
            
            { props.isAuthenticated ? (
                <div>
                    <p>User Authenticated. Please don't share!</p>
                    <WrappedComponent {...props} />
                </div>
                 
             ) : (
                <p>Please log in to view the info</p>
             )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
//! CHALLENGE
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));
//! CHALLENGE
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));