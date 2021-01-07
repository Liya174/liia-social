import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatusHooks from "./ProfileStatusHooks";

describe("ProfileStatusHooks component", () => {
    test.skip("Status from props should be in the state", () => {
        const userStatus = "here is my prettie status";
        let component;
        act(() => {
            component = create(<ProfileStatusHooks userStatus={userStatus} />);
        });
        const instance = component.querySelector();
        expect(instance.state.statusText).toBe(userStatus);
    });

    test("After creating <span> should be distlayed", () => {
        const userStatus = "here is my prettie status";
        let component;
        act(() => {
            component = create(<ProfileStatusHooks userStatus={userStatus} />);
        });
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("After creating <input> should not be distlayed", () => {
        const userStatus = "here is my prettie status";
        let component;
        act(() => {
            component = create(<ProfileStatusHooks userStatus={userStatus} />);
        });
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("After creating <span> should contains correct status", () => {
        const userStatus = "here is my prettie status";
        let component;
        act(() => {
            component = create(<ProfileStatusHooks userStatus={userStatus} />);
        });
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe(userStatus);
    });

    test("input should be displayed in edit mode instead of span", () => {
        const userStatus = "here is my prettie status";
        let component;
        act(() => {
            component = create(<ProfileStatusHooks userStatus={userStatus} />);
        });
        const root = component.root;
        const span = root.findByType("span");
        act(() => {
            span.props.onDoubleClick();
        });
        const input = root.findByType("input");
        expect(input.props.value).toBe(userStatus);
    });

    test.skip("callback should be called", () => {
        const mockCallback = jest.fn();

        const userStatus = "here is my prettie status";
        let component;
        act(() => {
            component = create(
                <ProfileStatusHooks
                    userStatus={userStatus}
                    updateStatus={mockCallback}
                />
            );
        });
        const instance = component.getInstance();
        act(() => {
            instance.deactivateEditMode();
        });

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
