<script lang="ts">
    import Row from "$lib/Row.svelte";
    import Col from "$lib/Col.svelte";
    import Input from "$lib/Input.svelte";
</script>
<div class="home">
    <Row>
        <Col width={4}>
            <Input label="Name" placeholder="Input your name"/>
        </Col>
        <Col width={4}>
            <Input label="Last Name" />
        </Col>
        <Col width={4}>
            <Input label="Birthday" type="date"/>
        </Col>
    </Row>
    <Row>
        <Col width={3}>
            <Input label="Password" type="password" />
        </Col>
        <Col width={3}>
            <Input label="Email" name="email" id="email" />
        </Col>
    </Row>
    <Row>
        <Col width={3}>
            <Input label="Phone number" type="tel" />
        </Col>
        <Col width={6}>
            <Input label="Upload" type="file"/>
        </Col>
        <Col>
            <Input label="Number" type="number"/>
        </Col>
    </Row>
</div>