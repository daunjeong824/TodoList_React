import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss'

const TodoList = ({ todos, onRemove, onToggle }) => {
    
    const rowRenderer = useCallback(
    ({index, key, style}) => {
        const todo = todos[index];
        return (
            <TodoListItem
            todo={todo}
            key={key}
            onRemove={onRemove}
            onToggle={onToggle}
            style={style}
            />
        );
    }, 
    [onRemove, onToggle, todos],
    );

    return(
        <List
        width={512} // 전체 크기
        height={513} // 전체 높이
        rowCount={todos.length} // 항목 개수
        rowHeight={57} // 항목 높이
        rowRenderer={rowRenderer} // 항목 렌더링 할 떄 쓰는 함수
        list={todos} // 배열
        style={{ outline: 'none' }} // List 기본 스타일 제거
        />
    );
};

export default React.memo(TodoList);