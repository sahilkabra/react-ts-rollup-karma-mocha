import * as React from 'react';

export interface HelloProps {name: string};

export function HelloWorld(props: HelloProps) {
    return <h1> Hello, {props.name} </h1>;
}
